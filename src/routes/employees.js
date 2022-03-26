const {newEmployee, getAll, getEmployee, updateEmployeeAddress, updateEmployeeInfo, deleteEmployee} = require('../components/employees/employees')
const router = require('express').Router()

router.post('/new', newEmployee)
router.get('/all', getAll)
router.get('/find/:id', getEmployee)
router.put('/updateAddress/:id', updateEmployeeAddress)
router.put('/updateInfo/:id', updateEmployeeInfo)
router.delete('/delete/:id', deleteEmployee)
module.exports = router