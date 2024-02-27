const functions = require('firebase-functions');
const express = require('express');
const { run } = require('../db.js');
const studentsRouter = require('../routes/students');
const cors = require('cors');

// Create an Express application
const app = express();

// Configure middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
run()
  .then(() => {
    console.log('Connected to Database...');
  })
  .catch((error) => {
    console.error('Error connecting to database:', error);
    process.exit(1);
  });

// Define routes
app.use('/api/students', studentsRouter);

// Define your Cloud Function
exports.app = functions.https.onRequest(app);
