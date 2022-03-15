const { Router } = require("express");
const { newCustomer } = require("../components/customers/customers.js");
const router = Router()

router.post('/new', newCustomer)


module.exports = {router}