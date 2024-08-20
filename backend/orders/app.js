const express = require('express');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');

const items = require('./src/routes/items');
const order = require('./src/routes/order');
const ErrorHandler = require('./errors/errorHandling');
const validator = require('./middlewares/validation');
const startDB = require('./databaseSetup');

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    secret: 'abcd',
  })
);
app.use(validator);

app.use(items);
app.use(order);

app.use(ErrorHandler);

startDB();
app.listen(3000, () => {
  console.log('Listening to 3000...');
});
