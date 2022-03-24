const Reservation = require('./Reservation')
const Room = require('../rooms/Room')
const calculatePrice = require('../../utils/reservationPrice.utils')

async function newReservation(req, res, next) {
    const {checkIn, checkOut, customerEmail, roomId} = req.body

    try {
        // TODO: Validate if the user exist by his email.
        const currentRoom = await Room.findOne({_id: roomId})
        const reservation = new Reservation({
            checkIn: new Date(checkIn),
            checkOut: new Date(checkOut),
            customerEmail,
            roomId,
            reservationPrice: calculatePrice(checkIn, checkOut, currentRoom.pricePerDay)
        })

        const savedReservation = await reservation.save()
        res.status(201).json({
            error: false,
            reservation: savedReservation
        })


    } catch(error) {
        res.json({
            error:true,
            message: error.message
        })
    }

}

module.exports = {newReservation}