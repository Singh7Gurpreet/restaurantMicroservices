const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { type } = require('os');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.set('toJSON', {
  transform: (doc, ret, option) => {
    delete ret.__v;
    delete ret._id;
    return ret;
  },
});

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next(); // Skip hashing if the password hasn't been modified
  }

  try {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
  } catch (err) {
    console.error('Error hashing password', err);
    next(err);
  }
});

UserSchema.statics.build = function (userObject) {
  return new this(userObject);
};

const model = mongoose.model('User', UserSchema);

module.exports = model;
