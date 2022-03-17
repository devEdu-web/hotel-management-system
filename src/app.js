const express = require("express");
const customers = require("./routes/customers.js");
const rooms = require('./routes/rooms.js')
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/customers', customers.router)
app.use('/rooms', rooms)

module.exports = {app}