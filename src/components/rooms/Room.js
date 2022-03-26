const {Schema} = require('mongoose')
const mongoose = require('mongoose')

const roomSchema = new Schema({
    roomType: String, // Single, Double, Triple, Suite, King, Queen
    pricePerHour: Number,
    maxPeople: Number,
    status: String,
    description: {
        bedrooms: Number,
        bathrooms: Number,
        livingRoom: Number,
    },
}, {versionKey: false})

module.exports = mongoose.model('Room', roomSchema)