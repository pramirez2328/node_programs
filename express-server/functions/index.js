const functions = require('firebase-functions');
const express = require('express');
import { studentsRouter } from '../routes/students';
const cors = require('cors');
import { run } from '../db';

// Create an Express application
const app = express();

// Configure middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
run()
  .then(() => {
    console.log('Connected to Database!...');
  })
  .catch((error) => {
    console.error('Error connecting to database:', error);
    process.exit(1);
  });

// Define routes
app.use('/api/students', studentsRouter);

// Define your Cloud Function
exports.app = functions.https.onRequest(app);
