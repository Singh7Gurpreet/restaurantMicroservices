const bodyParser = require('body-parser');
const express = require('express');
const reserve = require('./routes/reserve');
const errorHandling = require('./errors/errorHandling');
const verifyjson = require('./middlewares/verifyjson');

const app = express();

app.use(bodyParser.json());
app.use(verifyjson);

app.use(reserve);

app.use(errorHandling);

app.listen(3000, () => {
  console.log('Listening to 3000...');
});
