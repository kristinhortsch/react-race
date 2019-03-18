const express = require('express');
const app = express();
const { handler } = require('./middleware/error');
const random = require('./routes/random');
const connection = require('./middleware/connection');

app.use(express.json());
app.use('/random', connection, random);
app.use(handler);

module.exports = app;
