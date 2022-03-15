const Customer = require("./Customer.js");

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
        res.send(customer)
    } catch(error) {
        res.status(400).json({
            code: error.code,
            message: 'Email already exists.'
        })
    }


}

async function getAll(req, res, next) {
    try {
        const customers = await Customer.find({})
        res.json(customers)
    } catch(error) {
        res.json(error)
    }
}

module.exports = {newCustomer, getAll}