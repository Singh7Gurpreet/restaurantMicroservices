const express = require('express');
const { body } = require('express-validator');

const validate = require('../../middlewares/validation');
const UserDBConnection = require('../model/users');
const BadRequest = require('../../errors/BadRequest');

const route = express.Router();

route.post(
  '/signup',
  [
    body('name').notEmpty().trim().withMessage('Invalid Name'),
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 8 }).withMessage('Invalid Password'),
  ],
  validate,
  async (request, response, next) => {
    try {
      const existingUser = await UserDBConnection.findOne({
        email: request.body.email,
      });

      if (existingUser) {
        throw new BadRequest('User with same email already exists');
      }
      const userInfo = UserDBConnection.build(request.body);
      await userInfo.save();
      response.status(200).send({ message: 'Account Created successfully' });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = route;
