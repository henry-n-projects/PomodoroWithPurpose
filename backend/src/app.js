// EXPRESS APP SETUP

// 1. Load external libraries 
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// 2. Create the express app object
const app = express();

// 3. Add middleware to API / rules for req and route handling
// 'use' runs adds middleware functions that run before routes

app.use(helmet()); // Adds HTTP headers 
app.use(cors()); // Allows request from another domain e.g. frontend
app.use(express.json()) // Parses incoming JSON into requests
app.use(morgan('dev')); // Logs requests in console

// 4. Health check route
// app.get(path, handler) -> defines a route
// 1st arg = URL path, 2nd arg = callback func
app.get('/api/v1/health', (req, res) => {
    res.json({status: 'ok', uptime: process.uptime()})
});

// 5. Export express object to be used in server.js
module.exports = app;