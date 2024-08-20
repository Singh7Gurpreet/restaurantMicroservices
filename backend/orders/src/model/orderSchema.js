const mongoose = require('mongoose');
const crypto = require('crypto');

function generateRandomString(length) {
  return crypto.randomBytes(length).toString('hex').slice(0, length);
}

const OrderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: false,
  },
  userId: {
    type: String,
    required: true,
  },
  orderedItems: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: false,
  },
});

OrderSchema.statics.build = function ({ userId, orderedItems }) {
  orderedItems = JSON.stringify(orderedItems);
  return new this({
    orderId: generateRandomString(16),
    userId: userId,
    orderedItems: orderedItems,
    date: new Date().toISOString(),
  });
};

const model = mongoose.model('Order', OrderSchema);

module.exports = model;
