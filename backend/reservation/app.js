const bodyParser = require('body-parser');
const express = require('express');
const cookieSession = require('cookie-session');

const reserve = require('./src/routes/reserve');
const errorHandling = require('./errors/errorHandling');
const verifyjson = require('./middlewares/verifyjson');
const start = require('./index');

const app = express();

app.use(
  cookieSession({
    secret: 'abcd',
  })
);

app.use(bodyParser.json());

app.use(verifyjson);

//routes
app.use(reserve);

start();

app.use(errorHandling);

app.listen(3000, () => {
  console.log('Listening to 3000...');
});
