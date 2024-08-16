const express = require('express');
const ReservationSchema = require('../model/reservationSchema');
const jwt = require('jsonwebtoken');

const route = express.Router();

/*
    will accept req.body as
    {
      date: date
      startTime: number
      endTime: number
    } */
route.post('/reserve', async (req, res, next) => {
  try {
    const { date, startTime, endTime } = req.body;
    const { name } = jwt.verify(req.session.token, 'testkey');

    const data = new ReservationSchema({
      userId: name,
      date: date,
      startTime: startTime,
      endTime: endTime,
    });

    await data.save();

    res.status(200).send({ message: 'Reservation has been done' });
  } catch (err) {
    next(err);
  }
});
module.exports = route;
