const express = require('express');
const app = express();
const Joi = require('joi');
const cors = require('cors');
const students = require('./students.js');

app.use(cors());

app.use(express.json());
const schema = Joi.object({
  name: Joi.string().min(3).required(),
  courses: Joi.array().items(Joi.string()).min(1).required(),
  gpa: Joi.number().min(0).max(4).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(12).max(12).required(),
  address: Joi.string().min(3).required(),
});

app.get('/', (req, res) => {
  res.send(JSON.stringify('Hello World!!!!!'));
});

app.get('/api/students', (req, res) => {
  res.send(students);
});

app.delete('/api/students/:id', (req, res) => {
  const student = students.find((c) => c.id === parseInt(req.params.id));
  if (!student) return res.status(404).send('The student with the given ID was not found');

  const index = students.indexOf(student);
  students.splice(index, 1);

  res.send(student);
});

app.post('/api/students', (req, res) => {
  const { error } = schema.validate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  const student = {
    id: students.length + 1,
    name: req.body.name,
    courses: req.body.courses,
    gpa: req.body.gpa,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
  };
  students.push(student);
  res.send(student);
});

app.use((req, res, next) => {
  res.status(404).send('Bad network request. Please try again. ');
});

const port = process.env.Port || 8080;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
