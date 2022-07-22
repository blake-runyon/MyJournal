const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const conn = require('./models/db');

const indexRoute = require('./routes/index.route');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', indexRoute);

module.exports = app