const Customer = require("./Customer.js");
const createSchemaObjectModel = require('../../utils/update.utils')

async function newCustomer(req, res, next) {
    const {firstName, lastName, email, phone, country, city, street, zipCode} = req.body
    const customer = new Customer({
        firstName,
        lastName,
        email,
        phone,
        address: {
            country,
            city,
            street,
            zipCode,
        }
    })

    try {
        await customer.save()
        // TODO: Set a response code
        res.status(201).json({
            error: false,
            responseCode: 201,
            message: 'Customer created',
            elementInserted: customer
        })
    } catch(error) {
        res.json({
            error: true,
            errorCode: error.code,
            message: 'Email already exists.'
        })
    }


}

async function getAll(req, res, next) {
    try {
        const customers = await Customer.find({})
        res.json(customers)
    } catch(error) {
        res.json({
            error: true,
            message: error.message
        })
    }
}

async function getCustomer(req, res, next) {
    const customerId = req.params.id 

    try {
        const customer = await Customer.findOne({_id: customerId})
        res.json(customer)
    } catch(error) {
        res.json({
            error: true,
            message: error.message
        })
    }
}

async function updateCustomer(req, res, next) {
    const updatedInfo = createSchemaObjectModel(req.body)
    const customerId = req.params.id

    try {
        const updatedCustomer = await Customer.findByIdAndUpdate({_id: customerId}, updatedInfo, {new: true})
        res.status(201).json({
            error: false,
            message: 'Customer updated.',
            customerUpdated: updatedCustomer
        })
    } catch(error){
        res.json({
            error: true,
            error: error.message
        })
    }
}

async function deleteCustomer(req, res, next) {
    const customerId = req.params.id
    try {
        await Customer.deleteOne({_id: customerId})
        // TODO: Set a response code
        res.json({
            error: false,
            message: 'User deleted'
        })
    } catch(error) {
        res.json({
            error: true,
            message: error.message
        })
    }
}

module.exports = {newCustomer, getAll, getCustomer, deleteCustomer, updateCustomer}