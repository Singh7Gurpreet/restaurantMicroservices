const mongoose = require('mongoose');
const { type } = require('os');

// class Users {
//   constructor(name, email, password) {
//     this.name = name;
//     this.email = email;
//     this.password = password;
//   }

//   JSON() {
//     return {
//       name: this.name,
//       email: this.email,
//       password: this.password,
//     };
//   }
// }

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

module.exports = mongoose.model('User', UserSchema);
