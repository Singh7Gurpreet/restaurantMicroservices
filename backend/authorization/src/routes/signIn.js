const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { body } = require('express-validator');

const BadRequest = require('../../errors/BadRequest');
const UserDBConnection = require('../model/users');
const validate = require('../../middlewares/validation');

const route = express.Router();

route.post(
  '/signin',
  [
    body('email').isEmail().withMessage('Please enter valid email'),
    body('password')
      .isLength({ min: 8 })
      .withMessage('Please enter valid Password'),
  ],
  validate,
  async (request, response, next) => {
    try {
      const { email, password } = request.body;
      const existingUser = await UserDBConnection.findOne({ email: email });

      if (!existingUser) {
        throw new BadRequest('Your Email is not registered please sign up');
      }

      const match = await bcrypt.compare(password, existingUser.password);

      if (match) {
        const token = jwt.sign(
          { name: existingUser.name, email: existingUser.email },
          process.env.JWT_KEY,
          {
            expiresIn: '1h',
          }
        );

        // this token will be saved as token
        request.session.token = token;

        response.cookie('token', token, {
          maxAge: 3600000,
        });
        response.status(200).json({ token });
      } else {
        throw new BadRequest('Password is incorrect');
      }
    } catch (error) {
      next(error);
    }
  }
);

module.exports = route;
