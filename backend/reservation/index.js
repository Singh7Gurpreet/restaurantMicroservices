const bodyParser = require('body-parser');
const express = require('express');
const cookieSession = require('cookie-session');
// const expressSession = require('express-session');

// const database = require('./app');
const reserve = require('./routes/reserve');
const errorHandling = require('./errors/errorHandling');
const verifyjson = require('./middlewares/verifyjson');

const app = express();

app.use(
  cookieSession({
    secret: 'abcd',
  })
);

app.use(bodyParser.json());
// app.use(verifyjson);
app.use(
  cookieSession({
    signed: false,
    secure: true,
  })
);

// app.use(expressSession());
app.use(reserve);

// app.use(errorHandling);

app.listen(3000, () => {
  console.log('Listening to 3000...');
});
