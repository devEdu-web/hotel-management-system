const Employee = require('./Employee')

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
        res.json({
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

async function getOne(req, res, next) {
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

module.exports = {newEmployee, getAll, getOne}