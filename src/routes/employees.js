const {newEmployee, getAll, getEmployee, updateEmployee, deleteEmployee} = require('../components/employees/employees')
const router = require('express').Router()

router.post('/new', newEmployee)
router.get('/all', getAll)
router.get('/find/:id', getEmployee)
router.put('/update/:id', updateEmployee)
router.delete('/delete/:id', deleteEmployee)
module.exports = router