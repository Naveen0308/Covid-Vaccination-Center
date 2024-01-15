const express = require('express');
const bodyParser = require('body-parser');
const {executeQuery} = require('./db'); // Assuming js is in the same directory
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors())
  
app.use(bodyParser.json());

app.get('/api/all-center', async (req, res) => {
    console.log("first")
    try {
        const page = req.query.page || 1;
        const pageSize = req.query.pageSize || 10;
        // const { from, to, date } = req.body;

        const startIndex = (page - 1) * pageSize;

        let query = 'SELECT * FROM center';

        // Add WHERE conditions based on search parameters
        const currentDate = new Date().toISOString().split('T')[0]; // Get the current date in YYYY-MM-DD format

        // if (from || to || date) {
        //     query += ' WHERE';

        //     if (from) query += ` LOWER(f_from) LIKE LOWER('%${from}%')`;
        //     if (to) query += ` ${from ? 'AND' : ''} LOWER(f_to) LIKE LOWER('%${to}%')`;
        //     if (date) query += ` ${from || to ? 'AND' : ''} f_date='${date}'`;
        //     // if (date) {
        //     //     query += ` ${from || to ? 'AND' : ''} f_date BETWEEN '${currentDate}' AND '${date}'`;
        //     // } else {
        //     //     // If no specific date is provided, consider flights starting from the current date
        //     //     query += ` ${from || to ? 'AND' : ''} f_date >= '${currentDate}'`;
        //     // }
        // }

      

        query += ' ORDER BY date, avt_slot';
        query += ` LIMIT ${startIndex}, ${pageSize};`;

        const totalFlightsQuery = `SELECT COUNT(*) AS count FROM center;`;

        const totalFlights = await executeQuery(totalFlightsQuery);
        const flights = await executeQuery(query);

        if (flights.length > 0) {
            return res.status(200).json({
                center: flights,
                totalCenter: totalFlights[0].count,
                currentPage: page,
                totalPages: Math.ceil(totalFlights[0].count / pageSize),
            });
        } else {
            return res.status(200).json({ message: 'No Centers found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.get('/api/get-center/:id', async (req, res) => {
    try {
        const { id } = req.params; // Change from _id to id
        console.log(id);
        // const [ids, slot] = id.split("-");
        
        // console.log(ids, slot);
        const query = `SELECT * FROM center WHERE id=${id}`;
        const result = await executeQuery(query);

        if (result.length === 1) {
            return res.status(200).json(result[0]);
        } else {
            return res.status(404).send('The specified Center does not exist');
        }
    } catch (error) {
        console.error("Error fetching center:", error);
        return res.status(500).send('Internal Server Error');
    }
});

app.post('/api/update/', async(req, res) => {
    try {
        // const {id} = req.params;
        const {c_id, s_id, } = req.body;
    } catch (error) {
        console.log(error);
    }
})


const port = process.env.PORT || 5000;
app.listen(port, console.log(`listening on port ${port}`));


