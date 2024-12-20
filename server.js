const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const mysql = require('mysql');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'md181023',
  database: 'user_registration',
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.message);
  } else {
    console.log("Database connected successfully!");
  }
});
    
// 1. User Signup
app.post('/signup', async (req, res) => {
  const { full_name, username, email, phone_number, password } = req.body;

  if (!full_name || !username || !email || !password) {
    return res.status(400).json({ message: 'All required fields must be provided' });
  }

  const checkUserQuery = 'SELECT * FROM users WHERE username = ? OR email = ?';
  db.query(checkUserQuery, [username, email], async (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Server error', err });
    }

    if (results.length > 0) {
      return res.status(400).json({ message: 'Username or email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const insertUserQuery = `
      INSERT INTO users (full_name, username, email, phone_number, password)
      VALUES (?, ?, ?, ?, ?)`;

    db.query(insertUserQuery, [full_name, username, email, phone_number, hashedPassword], (err) => {
      if (err) {
        return res.status(500).json({ message: 'Error creating user', err });
      }

      res.status(201).json({ message: 'User created successfully' });
    });
  });
});

// 2. User Login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  const getUserQuery = 'SELECT * FROM users WHERE username = ?';

  db.query(getUserQuery, [username], async (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Server error', err });
    }

    if (results.length === 0) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    const user = results[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', token });
  });
});

// 3. Get User Data (Protected Route)
app.get('/user', (req, res) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    const getUserQuery = 'SELECT id, full_name, username, email, phone_number, created_at FROM users WHERE id = ?';

    db.query(getUserQuery, [decoded.id], (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Server error', err });
      }

      if (results.length === 0) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json(results[0]);
    });
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
