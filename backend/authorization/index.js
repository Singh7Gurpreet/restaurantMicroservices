const express = require('express');
const bodyParser = require('body-parser');

const singin = require('./src/routes/signin');

const app = express();

app.use(bodyParser.json());

app.use(singin);

app.listen(3000, () => {
  console.log('Authorization services listening on 3000...');
});
