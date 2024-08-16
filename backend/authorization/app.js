const express = require('express');
const bodyParser = require('body-parser');
const start = require('./index');
const cookieSession = require('cookie-session');

const signIn = require('./src/routes/signIn');
const signUp = require('./src/routes/signUp');
const errorHandling = require('./errors/errorHandling');
const app = express();

app.use(bodyParser.json());

app.use(
  cookieSession({
    secret: 'abcd',
  })
);

app.use(signIn);
app.use(signUp);

app.use(errorHandling);

start();
app.listen(3000, () => {
  console.log('Authorization services listening on 3000...');
});
