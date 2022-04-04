const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const customerSchema = new Schema(
    {
        firstName: String,
        lastName: String,
        email: {
            type: String,
            unique: true,
        },
        phone: Number,
        address: {
            country: String,
            city: String,
            street: String,
            zipCode: Number,
        },
    },
    { versionKey: false }
);

module.exports = mongoose.model('Customer', customerSchema);
