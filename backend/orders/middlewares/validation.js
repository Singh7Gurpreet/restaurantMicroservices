const jwt = require('jsonwebtoken');
const NotAuthorized = require('../errors/NotAuthorized');

const verify = (req, res, next) => {
  const key = 'testkey';
  jwt.verify(req.session.token, key, (err, user) => {
    if (err) {
      console.log(err);
      throw new NotAuthorized('User is not authorized');
    }
    req.customData = user;
    next();
  });
};

module.exports = verify;
