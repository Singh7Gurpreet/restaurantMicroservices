const express = require('express');
const routes = express.Router();

routes.get('/items', (req, res) => {
  //send all the items from server to client;
  //react client would be sufficed to query on available items
  res.json({});
});

module.exports = routes;
