const jwt = require('jsonwebtoken');
const NotAuthorized = require('../errors/NotAuthorized');

const verify = (req, res, next) => {
  // get token from req header
  // testing purpose
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiMTIzNCIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsImlhdCI6MTcyMzUzMzY1MSwiZXhwIjoxNzIzNTM3MjUxfQ.6QIZEfhsRWQWtHX7VlDvbcb8wG5Ycjea9PpOtrHz844';
  const key = 'testkey';
  jwt.verify(token, key, (err, user) => {
    if (err) {
      console.log(err);
      throw new NotAuthorized('User is not authorized');
    }
    next();
  });
};

module.exports = verify;
