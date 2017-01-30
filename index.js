const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  routes = require('./routes');

const app = express(),
  port = 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/static', express.static(path.join(__dirname, 'client')));

app.use('/users', routes.user);
app.use('/tests', routes.test);
app.use('/responses', routes.response);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
  console.log('connecting to mongodb...');
  mongoose.connect('mongodb://localhost/test');
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
    console.log('connected to mongodb!');
  });
});