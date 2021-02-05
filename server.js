const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const connectDB = require('./config/db')


//DB config 
dotenv.config({ path: './config/config.env' });

//connect to Mongo DB
connectDB();

const letters = require('./routes/letters');

const app = express();

app.use(express.json());

app.use('/api/v1/letters', letters);

// Bodyparser middleware
app.use(bodyParser.json());

const port = process.env.PORT ||5000;

app.listen(port, ()=>console.log(`Server started on port ${port}`));