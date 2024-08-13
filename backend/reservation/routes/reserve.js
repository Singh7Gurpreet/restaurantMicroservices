const express = require('express');

const route = express.Router();

route.post('/reserve', (req, res) => {
  // will accept req.body as
  /*{
    userId: number,
    day: dayToBeReserved,
    time: TimeToBeReserved
  }*/
  // Logic to add reservation
  res.json({ verified: 'ok' });
});

module.exports = route;
