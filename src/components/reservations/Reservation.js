const {Schema} = require('mongoose')
const mongoose = require('mongoose')

const reservationSchema = new Schema({
    checkIn: {
        type: Date,
        default: Date.now()
    },
    checkOut: Date,
    customerEmail: String,
    roomId: String,
    reservationPrice: Number
})

reservationSchema.index({"checkOut": 1}, {expireAfterSeconds: 0})

module.exports = mongoose.model('Reservations', reservationSchema)