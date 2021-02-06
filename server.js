const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const path = require('path');
const connectDB = require('./config/db')

//DB config 
dotenv.config({ path: './config/config.env' });

//connect to Mongo DB
connectDB();

const letters = require('./routes/letters');

const app = express();

app.use(express.json());

app.use('/api/v1/letters', letters);

// Sever static assets if in production
if(process.env.NODE_ENV==='production'){
    app.use(express.static(client/build));
    
    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

// Bodyparser middleware
app.use(bodyParser.json());

const port = process.env.PORT ||5000;

app.listen(port, ()=>console.log(`Server started on port ${port}`));