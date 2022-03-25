const Customer = require("./Customer.js");
const GenerateObject = require('../../utils/update.utils')

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
        res.status(201).json({
            error: false,
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
    const customerId = req.params.id
    // TODO: Check if the user has a reservation in his name, if so, update the name in the reservation too
    const noEmptyObject = GenerateObject.removeEmptyFields(req.body)
    const finalObject = GenerateObject.addAddressObject(noEmptyObject)

    try {
        const updatedCustomer = await Customer.findByIdAndUpdate({_id: customerId}, finalObject, {new: true})
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
        res.json({
            error: false,
            message: 'Customer deleted'
        })
    } catch(error) {
        res.json({
            error: true,
            message: error.message
        })
    }
}

module.exports = {newCustomer, getAll, getCustomer, deleteCustomer, updateCustomer}