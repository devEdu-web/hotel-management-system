const {Schema} = require('mongoose')
const mongoose = require('mongoose')

const roomSchema = new Schema({
    pricePerDay: Number,
    maxPeople: Number,
    description: {
        bedrooms: Number,
        bathrooms: Number,
        livingRoom: Number,
        maxPeople: Number
    },
    status: String
})

module.exports = mongoose.model('Room', roomSchema)