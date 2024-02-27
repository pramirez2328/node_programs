const functions = require('firebase-functions');
const express = require('express');
const { run } = require('./db.js'); // Import the run function from db.js
const router = require('./students.js');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.options('*', cors());
// Connect to MongoDB before defining routes
run()
  .then(() => {
    // Define routes
    app.use('/api/students', router);

    // Define your Cloud Function
    exports.app = functions.https.onRequest(app);
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process if unable to connect to MongoDB
  });
