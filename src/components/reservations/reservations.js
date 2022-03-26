const Reservation = require('./Reservation')
const Room = require('../rooms/Room')
const calculatePrice = require('../../utils/reservationPrice.utils')
const GenerateObject = require('../../utils/update.utils')

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
            reservationPrice: calculatePrice(checkIn, checkOut, currentRoom.pricePerHour)
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

async function getAll(req, res, next){
    try {
        const reservations = await Reservation.find({})
        res.json(reservations)
    } catch(error) {
        res.json({
            error: true,
            message: error.message
        })
    }
}

async function getReservation(req, res, next) {
    const reservationId = req.params.id
    try {
        const reservation = await Reservation.findOne({_id: reservationId})
        res.json(reservation)
    } catch(error){
        res.json({
            error: true,
            message: error.message
        })
    }
}

/**

Update reservation will not be implemented, the client will have to delete the existing reservation and create another one.
If it was implemented the controller would have to fetch the room to verify its price per hour

*/

async function deleteReservation(req, res, next) {
    const reservationId = req.params.id
    try {
        await Reservation.deleteOne({_id: reservationId})
        res.json({
            error: false,
            message: 'Reservation Deleted'
        })
    } catch(error) {
        res.json({
            error: true,
            message: error.message
        })
    }
}

module.exports = {newReservation, getAll, getReservation, deleteReservation}