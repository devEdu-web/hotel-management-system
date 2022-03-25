const { Router } = require("express");
const { newCustomer, getAll, getCustomer, deleteCustomer, updateCustomerInfo, updateCustomerAddress} = require("../components/customers/customers.js");
const router = Router()

router.get('/find/:id', getCustomer)
router.get('/all', getAll)
router.post('/new', newCustomer)
router.delete('/delete/:id', deleteCustomer)
router.put('/updateInfo/:id', updateCustomerInfo)
router.put('/updateAddress/:id', updateCustomerAddress)
module.exports = router