const express = require('express');
const mongoose = require('mongoose');
const studentsRouter = require('./routes/students');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost/students');

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database...'));
app.use('/api/students', studentsRouter);

app.use((req, res, next) => {
  res.status(404).send('Bad network request. Please try again. ');
});

const PORT = process.env.Port || 8080;
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
