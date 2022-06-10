const express = require('express');
const logger = require('morgan');
const controller = require('./controller');

const app = express();

const port = 8080;

app.use(logger('dev'));

app.get('/account/:tx', controller.account)
app.get('/transaction/:tx', controller.transaction)
app.get('/balance/:tx', controller.balance)
app.get('/block/:tx', controller.block)
app.get('/deploy', controller.deploy)
app.get('/execute', controller.execute)

app.listen(port, () => {
  console.log('Listening...');
}) 