const mongoose = require('mongoose');

const start = async () => {
  try {
    await mongoose.connect('mongodb://reservation-mongo-srv:27017/reservation');
    console.log('Connected to mongodb...');
  } catch (error) {
    console.log('Error occured while connecting to mongodb', error.message);
  }
};

module.exports = start;
