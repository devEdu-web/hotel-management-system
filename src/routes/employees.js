const {newEmployee, getAll} = require('../components/employees/employees')
const router = require('express').Router()

router.post('/new', newEmployee)
router.get('/all', getAll)

module.exports = router