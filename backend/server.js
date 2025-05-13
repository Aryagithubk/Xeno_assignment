const express = require('express');
const mongoose = require('mongoose');
const segmentRoutes = require('./routes/segmentRoutes');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());

app.get('/',(req,res) => {
    res.send('API is running...');
});

// Add this to server.js after app.use(express.json())
app.use('/api', require('./routes/CustomerRoutes'));
app.use('/api', require('./routes/orderRoutes'));

app.use('/api/segments', segmentRoutes);


app.listen(PORT,() => console.log(`server running on port ${PORT}`));  