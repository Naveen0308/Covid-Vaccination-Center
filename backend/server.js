const express = require('express');
const bodyParser = require('body-parser');
const { executeQuery } = require('./db');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const cors = require('cors'); // Import cors

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Use cors middleware
app.use(express.json());
app.use(bodyParser.json());

// Set headers to allow cross-origin requests
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// Endpoint to handle user signup
app.post('/api/signup', async (req, res) => {
    try {
      const { name, username, email, password, confirmPassword } = req.body;
  
      // Log received data
      console.log('Received data:', req.body);
  
      if (password !== confirmPassword) {
        return res.status(400).json({ error: 'Passwords do not match' });
      }

    //const hashedPassword = await bcrypt.hash(password, 10);

    const query = 'INSERT INTO users (name, username, email, password) VALUES (?, ?, ?, ?)';
    const values = [name, username, email, password];

    await executeQuery(query, values);

    res.status(201).json({ success: true, message: 'User registered successfully' });
} catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
