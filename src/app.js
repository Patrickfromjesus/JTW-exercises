const express = require('express');
const { usersRouter, carsRouter } = require('./Routers/index');

const app = express();

app.use(express.json());

app.use('/users', usersRouter);
app.use('/cars', carsRouter);

module.exports = app;
