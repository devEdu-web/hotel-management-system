const { Router } = require("express");
const { newCustomer, getAll, getCustomer} = require("../components/customers/customers.js");
const router = Router()

router.get('/find/:id', getCustomer)
router.get('/all', getAll)
router.post('/new', newCustomer)


module.exports = {router}