const express = require('express');

const items = require('./src/routes/items');
const order = require('./src/routes/order');

const app = express();

app.use(items);
app.use(order);

app.listen(3000, () => {
  console.log('Listening to 3000...');
});
