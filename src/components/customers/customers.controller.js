const Customer = require('./Customer.js');
const GenerateObject = require('../../utils/update.utils');
const Reservation = require('../reservations/Reservation');

async function newCustomer(req, res, next) {
    const {
        firstName,
        lastName,
        email,
        phone,
        country,
        city,
        street,
        zipCode,
    } = req.body;

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
        },
    });

    try {
        await customer.save();
        res.status(201).json({
            error: false,
            message: 'Customer created',
        });
    } catch (error) {
        res.json({
            error: true,
            message: 'Email already exists.',
        });
    }
}

async function getAll(req, res, next) {
    try {
        const customers = await Customer.find({});
        res.json(customers);
    } catch (error) {
        res.json({
            error: true,
            message: error.message,
        });
    }
}

async function getCustomer(req, res, next) {
    const customerId = req.params.id;

    try {
        const customer = await Customer.findOne({ _id: customerId });
        res.json(customer);
    } catch (error) {
        res.json({
            error: true,
            message: error.message,
        });
    }
}

async function updateCustomerInfo(req, res, next) {
    const customerId = req.params.id;
    const noEmptyObject = GenerateObject.removeEmptyFields(req.body);

    try {
        // Update user email in the reservations collection
        const customer = await Customer.findOne({ _id: customerId });
        const customerReservations = await Reservation.find({customerEmail: customer.email,});
        if (customerReservations.length > 0) {
            await Reservation.updateMany(
                { customerEmail: customer.email },
                { customerEmail: req.body.email }
            );
        }

        const updatedCustomer = await Customer.updateOne(
            { _id: customerId },
            { ...noEmptyObject }
        );
        res.status(201).json({
            error: false,
            message: 'Customer updated.',
        });
    } catch (error) {
        res.json({
            error: true,
            error: error.message,
        });
    }
}

async function updateCustomerAddress(req, res, next) {
    const customerId = req.params.id;
    const noEmptyObject = GenerateObject.removeEmptyFields(req.body);
    try {
        if (noEmptyObject.country) {
            await Customer.updateOne(
                { _id: customerId },
                { $set: { 'address.country': noEmptyObject.country } }
            );
        }

        if (noEmptyObject.city) {
            await Customer.updateOne(
                { _id: customerId },
                { $set: { 'address.city': noEmptyObject.city } }
            );
        }

        if (noEmptyObject.street) {
            await Customer.updateOne(
                { _id: customerId },
                { $set: { 'address.street': noEmptyObject.street } }
            );
        }

        if (noEmptyObject.zipCode) {
            await Customer.updateOne(
                { _id: customerId },
                { $set: { 'address.zipCode': noEmptyObject.zipCode } }
            );
        }

        res.status(201).json({
            error: false,
            message: 'Customer updated',
        });
    } catch (error) {
        res.json({
            error: true,
            message: error.message,
        });
    }
}

async function deleteCustomer(req, res, next) {
    const customerId = req.params.id;
    try {
        await Customer.deleteOne({ _id: customerId });
        res.json({
            error: false,
            message: 'Customer deleted',
        });
    } catch (error) {
        res.json({
            error: true,
            message: error.message,
        });
    }
}

module.exports = {
    newCustomer,
    getAll,
    getCustomer,
    deleteCustomer,
    updateCustomerInfo,
    updateCustomerAddress,
};
