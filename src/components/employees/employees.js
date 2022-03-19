const Employee = require('./Employee')
const GenerateObject = require('../../utils/update.utils')
async function newEmployee (req, res, next) {
    const {firstName, lastName, phone, department, country, city, street, zipCode} = req.body
    const employee = new Employee({
        firstName, 
        lastName,
        phone,
        department,
        address: {
            country,   
            city,
            street,
            zipCode
        }
    })

    try {
        const newEmployee = await employee.save()
        res.status(201).json({
            error: false,
            message: 'Employee created.',
            elementInserted: newEmployee
        })
    } catch(error) {
        res.json({
            error: true,
            message: error.message
        })
    }

}

async function getAll(req, res, next) {
    try {
        const employees = await Employee.find({})
        res.json(employees)
    } catch(error) {
        res.json({
            error: true,
            message: error.message
        })
    }
}

async function getEmployee(req, res, next) {
    const employeeId = req.params.id
    try {
        const employee = await Employee.findOne({_id: employeeId})
        res.json(employee)
    } catch(error) {
        res.json({
            error: true,
            message: error.message
        })
    }

}

async function updateEmployee(req, res, next) {
    const employeeId = req.params.id
    // TODO: Find out why this two constants is returning the same object
    const noEmptyObject = GenerateObject.removeEmptyFields(req.body)
    const finalObject = GenerateObject.addAddressObject(noEmptyObject)
    
    try {
        const updatedEmployee = await Employee.findOneAndUpdate({_id: employeeId}, finalObject, {new: true})
        res.status(201).json({
            error: false,
            message: 'Employee updated',
            employeeUpdated: updatedEmployee
        })
    } catch(error) {
        res.json({
            error: true,
            message: error.message
        })
    }

}

async function deleteEmployee(req, res, next) {
    const employeeId = req.params.id
    try {
        await Employee.deleteOne({_id: employeeId})
        res.json({
            error:false,
            message: 'Employee Deleted'
        })
    } catch(error) {
        res.json({
            error: true,
            message: error.message
        })
    }
}

module.exports = {newEmployee, getAll, getEmployee, updateEmployee, deleteEmployee}