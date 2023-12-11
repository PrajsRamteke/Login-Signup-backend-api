# Node.js Express Authentication API

This project is a simple Node.js Express API for user authentication, including signup and login functionality. It uses MongoDB for data storage, bcrypt for password hashing, and JSON Web Tokens (JWT) for user authentication.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Testing with Postman](#testing-with-postman)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-project.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-project
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and set the environment variables:

   ```plaintext
   MONGO_URL=your_mongo_db_connection_string
   PORT=3000
   ```

   Replace `your_mongo_db_connection_string` with your actual MongoDB connection string.

5. Start the server:
  ```bash
  npm start
   ```
   ```bash
   node app.js 
   ```

## Usage

The server will be running at `http://localhost:3000`. You can use this API to create user accounts, log in, and receive authentication tokens.

## Endpoints

- **POST /api/signup**

  Create a new user account.

  Request Body:

  ```json
  {
    "username": "example_user",
    "email": "user@example.com",
    "password": "your_password"
  }
  ```

- **POST /api/login**

  Log in and receive an authentication token.

  Request Body:

  ```json
  {
    "email": "user@example.com",
    "password": "your_password"
  }
  ```

## Testing with Postman

1. Open Postman.
2. Create a new request for signup:
   - Method: POST
   - URL: `http://localhost:3000/api/signup`
   - Body: JSON with username, email, and password.
3. Create a new request for login:
   - Method: POST
   - URL: `http://localhost:3000/api/login`
   - Body: JSON with email and password.
4. Check the responses for success or error messages.

## Environment Variables

- **MONGO_URL**: MongoDB connection string.
- **PORT**: Port number for the server.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.