const Employee = require('./Employee');
const GenerateObject = require('../../utils/update.utils');

async function newEmployee(req, res, next) {
    const {
        firstName,
        lastName,
        phone,
        department,
        country,
        city,
        street,
        zipCode,
    } = req.body;
    const employee = new Employee({
        firstName,
        lastName,
        phone,
        department,
        address: {
            country,
            city,
            street,
            zipCode,
        },
    });

    try {
        const newEmployee = await employee.save();
        res.status(201).json({
            error: false,
            message: 'Employee created.',
        });
    } catch (error) {
        res.json({
            error: true,
            message: error.message,
        });
    }
}

async function getAll(req, res, next) {
    try {
        const employees = await Employee.find({});
        res.json(employees);
    } catch (error) {
        res.json({
            error: true,
            message: error.message,
        });
    }
}

async function getEmployee(req, res, next) {
    const employeeId = req.params.id;
    try {
        const employee = await Employee.findOne({ _id: employeeId });
        res.json(employee);
    } catch (error) {
        res.json({
            error: true,
            message: error.message,
        });
    }
}

async function updateEmployeeInfo(req, res, next) {
    const employeeId = req.params.id;
    const noEmptyObject = GenerateObject.removeEmptyFields(req.body);

    try {
        const updatedInfo = await Employee.updateOne(
            { _id: employeeId },
            { ...noEmptyObject },
            { new: true }
        );
        res.status(201).json({
            error: false,
            message: 'Employee updated',
        });
    } catch (error) {
        res.json({
            error: true,
            message: error.message,
        });
    }
}

async function updateEmployeeAddress(req, res, next) {
    const employeeId = req.params.id;
    const noEmptyObject = GenerateObject.removeEmptyFields(req.body);
    try {
        if (noEmptyObject.country) {
            await Employee.updateOne(
                { _id: employeeId },
                { $set: { 'address.country': noEmptyObject.country } }
            );
        }

        if (noEmptyObject.city) {
            await Employee.updateOne(
                { _id: employeeId },
                { $set: { 'address.city': noEmptyObject.city } }
            );
        }

        if (noEmptyObject.street) {
            await Employee.updateOne(
                { _id: employeeId },
                { $set: { 'address.street': noEmptyObject.street } }
            );
        }

        if (noEmptyObject.zipCode) {
            await Employee.updateOne(
                { _id: employeeId },
                { $set: { 'address.zipCode': noEmptyObject.zipCode } }
            );
        }

        res.status(201).json({
            error: false,
            message: 'Employee address updated',
        });
    } catch (error) {
        res.json({
            error: true,
            message: error.message,
        });
    }
}

async function deleteEmployee(req, res, next) {
    const employeeId = req.params.id;
    try {
        await Employee.deleteOne({ _id: employeeId });
        res.json({
            error: false,
            message: 'Employee Deleted',
        });
    } catch (error) {
        res.json({
            error: true,
            message: error.message,
        });
    }
}

module.exports = {
    newEmployee,
    getAll,
    getEmployee,
    updateEmployeeInfo,
    updateEmployeeAddress,
    deleteEmployee,
};
