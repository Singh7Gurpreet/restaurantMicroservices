const express = require('express');
const OrderModel = require('../model/orderSchema');
const route = express.Router();

function saveOrder(orders) {}

route.post('/order', async (req, res) => {
  // will accept data like the following
  /*
    req.body.orders = 
    {
      item1Id:qty,
      item2Id:qty,
    }

    will pass link to payments service
    also pass the event to kitchen 
  */
  req.body.userId = req.customData.userId;
  console.log(req.body);
  const orderObject = await OrderModel.build(req.body);
  console.log(orderObject);
  await orderObject.save();
  res.status(201).json({ msg: 'Fine so far' });
  // now pass payment message to payment queue for further payment logic
});

module.exports = route;
