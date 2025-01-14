# Project Documentation

## Overview
This project implements a basic Express.js server with routes to manage user information. It includes user input validation, database integration, and error handling.

## File Descriptions

### 1. `addUser.js`
- **Purpose**: Handles the `/addInfo` route for adding user information.
- **Dependencies**: 
  - `express`
  - `Joi`
  - `db.js`
- **Route**: `POST /addInfo`
  - **Validation**: 
    - `name`: Required, non-empty string.
    - `email`: Required, valid email format.
    - `education`: Optional, string (max 100 characters).
    - `age`: Required, integer (1-120).
    - `mobile_no`: Required, string (starts with 7, 8, or 9 and has 10 digits).
    - `city`: Optional, string (max 100 characters).
  - **Database Operations**:
    1. Checks for existing users with the same email and mobile number.
    2. Inserts new user data into the `info` table if no duplicates are found.
- **Responses**:
  - `200`: Data inserted successfully.
  - `400`: Validation error or user already exists.
  - `500`: Server error during database operations.

### 2. `db.js`
- **Purpose**: Establishes a connection to the MySQL database.
- **Dependencies**: 
  - `mysql2`
- **Database Configuration**:
  - **Host**: `localhost`
  - **User**: `root`
  - **Password**: `md181023`
  - **Database**: `homechef`
- **Error Handling**: Exits the process if the connection fails.

### 3. `main.js`
- **Purpose**: Initializes the Express.js server and sets up routing.
- **Dependencies**:
  - `express`
  - `addUser.js`
  - `getUser.js`
- **Routes**:
  - `/api/addInfo`: Managed by `addUser.js`.
  - `/api/getInfo`: Placeholder for managing user retrieval (not provided in the uploaded files).
- **Server**:
  - Runs on `localhost` at port `3000`.

## How to Run the Project

1. **Install Dependencies**:
   ```bash
   npm install express mysql2 joi
   ```

2. **Set Up Database**:
   - Ensure MySQL is running.
   - Create a database named `homechef`.
   - Create a table `info` with the following schema:
     ```sql
     CREATE TABLE info (
         id INT AUTO_INCREMENT PRIMARY KEY,
         name VARCHAR(100) NOT NULL,
         email VARCHAR(100) NOT NULL,
         education VARCHAR(100),
         age INT NOT NULL,
         mobile_no VARCHAR(10) NOT NULL,
         city VARCHAR(100)
     );
     ```

3. **Run the Server**:
   ```bash
   node main.js
   ```

4. **Test the API**:
   - Use tools like Postman or Curl to test the `/api/addInfo` endpoint.
   - Example:
     ```bash
     curl -X POST http://localhost:3000/api/addInfo \
     -H "Content-Type: application/json" \
     -d '{
         "name": "John Doe",
         "email": "john.doe@example.com",
         "education": "Bachelor's Degree",
         "age": 30,
         "mobile_no": "9876543210",
         "city": "New York"
     }'
     ```

## Future Improvements

- Implement the `/api/getInfo` route in `getUser.js` to retrieve user information.
- Add unit tests for routes and database operations.
- Enhance security by using environment variables for sensitive configurations (e.g., database credentials).
- Implement rate limiting and request logging for better monitoring and security.
