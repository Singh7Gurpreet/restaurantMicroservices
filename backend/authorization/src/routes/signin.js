const express = require('express');
const { body } = require('express-validator');

const route = express.Router();

route.post(
  '/signin',
  [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 8 }).withMessage('Invalid Password'),
  ],
  (request, response) => {
    console.log(request.body);
    response.send(200);
  }
);

module.exports = route;
