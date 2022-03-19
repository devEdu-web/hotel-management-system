const {newEmployee, getAll, getOne} = require('../components/employees/employees')
const router = require('express').Router()

router.post('/new', newEmployee)
router.get('/all', getAll)
router.get('/find/:id', getOne)

module.exports = router