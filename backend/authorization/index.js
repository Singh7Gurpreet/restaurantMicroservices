const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const singin = require('./src/routes/signin');

const app = express();

app.use(bodyParser.json());

app.use(singin);

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
