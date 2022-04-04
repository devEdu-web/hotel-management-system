const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const employeeSchema = new Schema(
    {
        firstName: String,
        lastName: String,
        phone: Number,
        department: String,
        address: {
            country: String,
            city: String,
            street: String,
            zipCode: Number,
        },
    },
    { versionKey: false }
);

module.exports = mongoose.model('Employee', employeeSchema);
