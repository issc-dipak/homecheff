const mysql = require('mysql2'); // Use only one MySQL library (e.g., 'mysql')

// Create MySQL Database Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'md181023', // Replace with your actual MySQL password
  database: 'user_registration', // Replace with your actual database name
});

// Connect to MySQL Database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.message);
    process.exit(1); // Exit the application if the connection fails
  } else {
    console.log('Connected to MySQL');
  }
});

// Export the database connection for use in other modules
module.exports = db;
