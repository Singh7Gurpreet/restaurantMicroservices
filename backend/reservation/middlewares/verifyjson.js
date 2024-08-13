const jwt = require('jsonwebtoken');
const NotAuthorized = require('../errors/NotAuthorized');

const verify = (req, res, next) => {
  // get token from req header
  // testing purpose
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiMTIzNCIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsImlhdCI6MTcyMzUxOTM5OCwiZXhwIjoxNzIzNTIyOTk4fQ.HLTDp-yYt3A60ZXSw1rP-NS0eCJ9dgwMCJOmoUk1iXI';
  const key = 'testkey';
  jwt.verify(token, key, (err, user) => {
    if (err) {
      console.log;
      throw new NotAuthorized('User is not authorized');
    }
    console.log(user);
    next();
  });
};

module.exports = verify;
