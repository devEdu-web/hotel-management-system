const {newEmployee} = require('../components/employees/employees')
const router = require('express').Router()

router.post('/new', newEmployee)

module.exports = router