const { Router } = require("express");
const { newCustomer, getAll} = require("../components/customers/customers.js");
const router = Router()

router.get('/all', getAll)
router.post('/new', newCustomer)


module.exports = {router}