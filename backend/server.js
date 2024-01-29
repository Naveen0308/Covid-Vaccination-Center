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
      console.log("from backend", user)
      console.log("userid",user.id);
      res.status(200).json({ success: true,email:user[0].email, userId:user[0].id, message: 'Login successfully done' });
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

    
  app.post('/api/deleteCenter/:id',async(req,res) => {
    try{
      const {id}=req.params;
      console.log(id);
      const del1 = await executeQuery('DELETE FROM booked_slots WHERE center_id=?',[id]);
      //const sel1=await executeQuery('SELECT * FROM centers WHERE id=?',[id]);
      //console.log(sel1);
      const del2 = await executeQuery('DELETE FROM centers WHERE id=?',[id]);
      console.log(del1);
      console.log(del2);
      res.status(200).json({ success: true});
  
    }        
    catch (error) {
      console.error(error); 
      res.status(500).json({ error: 'Internal Server Error' });  
    }  
  });

  
  app.get('/api/all-center', async (req, res) => {
    try {
      const centers = await executeQuery('SELECT * FROM centers');
      res.status(200).json({ success: true, centers });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  app.get('/api/get-center/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const center = await executeQuery('SELECT * FROM centers WHERE id = ?', [id]);
  
      if (center.length === 0) {
        return res.status(404).json({ error: 'Center not found' });
      }
  
      res.status(200).json({ success: true, center: center[0] });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  app.post('/api/book-slot', async (req, res) => {
    try {
      console.log(req.body);
      let { userId, center_id, slotid, name, phonenumber, age, date, email, address, dose } = req.body;
      // center_id += 1;   
      console.log("userId",userId);
      const query = `
        INSERT INTO booked_slots (user_id,center_id, user_name, phone_number, age, date, email, address, dose,slot_id)
        VALUES (?,?, ?, ?, ?, ?, ?, ?, ?,?)
      `;
      const values = [userId,center_id, name, phonenumber, age, date, email, address, dose,slotid];
  
      await executeQuery(query, values);
  
      res.status(201).json({ success: true, message: 'Slot booked successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });  


  app.get('/api/getUser/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const user = await executeQuery('SELECT * FROM users WHERE id = ?', [id]);
      const bookings = await executeQuery('SELECT B.*, C.location,C.address,C.name FROM booked_slots AS B JOIN centers AS C ON B.center_id=C.id WHERE user_id = ?', [id]);
      console.log("userdata:", user);
      if (user.length === 0) {
        return res.status(404).json({ error: 'Center not found' });
      }
         
      res.status(200).json({ success: true, user: user[0], bookings:bookings });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' }); 
    }
  });
 
  app.get('/api/getUser/currentBooking/:id', async (req, res) => {
    try {
      const { id } = req.params;
      console.log("rtyuytf");
      const user = await executeQuery('SELECT * FROM users WHERE id = ?', [id]);
      const bookings = await executeQuery('SELECT B.*, C.name,C.location,C.address FROM booked_slots AS B JOIN centers AS C ON B.center_id=C.id WHERE user_id = ? ORDER BY B.id DESC LIMIT 1', [id]);
      console.log("bookings:", bookings);
      if (user.length === 0) {
        return res.status(404).json({ error: 'Center not found' });
      }
  
      res.status(200).json({ success: true, user: user[0], bookings:bookings });
    } catch (error) {
      console.error(error); 
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

    
  app.post('/api/cancelBooking/:id',async(req,res) => {
    try{
      const {id}=req.params;
      const del = await executeQuery('DELETE FROM booked_slots WHERE id=?',[id]);
      console.log(del);
      res.status(200).json({ success: true});

    }
    catch (error) {
      console.error(error); 
      res.status(500).json({ error: 'Internal Server Error' });
    }  
  });
 





  app.get('api/getBookings/:id', async (req, res) => {
    try {

      const { id } = req.params;
      const bookedSlots = await executeQuery('SELECT * FROM booked_slots WHERE user_id = ?', [id]);
      console.log("booked Slots:", bookedSlots);
      if (user.length === 0) {
        return res.status(404).json({ error: 'Center not found' });
      }
  
      res.status(200).json({ success: true, user: bookedSlots });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });



  // Start the server 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });