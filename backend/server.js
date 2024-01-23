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
      const { name, username, email, password} = req.body;
  
      // Log received data
      console.log('Received data:', req.body);
  
      //if (password !== confirmPassword) {
       // return res.status(400).json({ error: 'Passwords do not match' });
      //}

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





// handling user login

app.post('/api/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await executeQuery('SELECT * FROM users WHERE email = ?', [email]);
  
      if (user.length === 0) {
        return res.status(401).json({ error: 'NoPassword!' });
      }
      console.log(password, user[0].password)
      const passwordMatch = password === (user[0].password) ? 1 : 0;
      console.log(passwordMatch)
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Incorrect email or password' });
      }
  
      res.status(200).json({ success: true,email:user[0].email, message: 'Login successful' });
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  
  app.post('/api/add-center', async (req, res) => {
    try {
      const { centerName, location, centerAddress } = req.body;
  
      const query = 'INSERT INTO centers (name, location, address) VALUES (?, ?, ?)';
      const values = [centerName, location, centerAddress];
  
      await executeQuery(query, values);
  
      res.status(201).json({ success: true, message: 'Center added successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  
  
  // Endpoint to get all centers
  app.get('/api/all-center', async (req, res) => {
    try {
      const centers = await executeQuery('SELECT * FROM centers');
      res.status(200).json({ success: true, center: centers });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });




  // Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });