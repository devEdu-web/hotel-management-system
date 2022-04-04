const express = require('express');
const customers = require('./routes/customers.routes');
const rooms = require('./routes/rooms.routes');
const employees = require('./routes/employees.routes');
const reservations = require('./routes/reservations.routes');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/customers', customers);
app.use('/rooms', rooms);
app.use('/employees', employees);
app.use('/reservations', reservations);

module.exports = { app };
