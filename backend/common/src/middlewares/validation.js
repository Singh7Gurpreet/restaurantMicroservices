import { validationResult } from 'express-validator';

function validation(error, req, res, next) {
  const errors = validationResult(req);
  if (!errors.empty()) {
    throw new Error(errors, array);
  }
  next();
}

module.exports = { validation };
