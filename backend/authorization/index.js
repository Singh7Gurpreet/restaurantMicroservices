const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const signIn = require('./src/routes/signIn');
const signUp = require('./src/routes/signUp');
const errorHandling = require('./errors/errorHandling');
const app = express();

app.use(bodyParser.json());

app.use(signIn);
app.use(signUp);

const start = async () => {
  try {
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');
    console.log('Connected to mongodb...');
  } catch (error) {
    console.log('Error occured while connecting to mongodb');
  }
};
start();
app.listen(3000, () => {
  console.log('Authorization services listening on 3000...');
});

app.use(errorHandling);
