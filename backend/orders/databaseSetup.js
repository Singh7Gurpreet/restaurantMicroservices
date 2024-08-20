const mongoose = require('mongoose');

const startDbConnection = async () => {
  try {
    await mongoose.connect('mongodb://order-mongo-srv:27017/order');
    console.log('Connected to mongodb...');
  } catch (error) {
    console.log('Error occured while connecting to mongodb', error.message);
  }
};

module.exports = startDbConnection;
