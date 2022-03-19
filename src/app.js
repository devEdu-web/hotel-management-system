const express = require("express");
const customers = require("./routes/customers.js");
const rooms = require('./routes/rooms.js')
const employees = require('./routes/employees')
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/customers', customers)
app.use('/rooms', rooms)
app.use('/employees', employees)

/*
Room and Customer controller

If only a field of the (address or description) is passed through the request, the application is replacing the one in the database, in other words, if we have for example the fields city, country, street and zipCode in the database, but on the update request we send only the city field, the other are replaced by this city fields.

Probably we will have to update the customer info, and customer address in separate routes, the same way with the rooms.

*/

module.exports = {app}