const Room = require('./Room')
const GenerateObject = require('../../utils/update.utils')
const Reservation = require('../reservations/Reservation')

async function newRoom(req, res, next) {
    const {roomType, pricePerHour, maxPeople, bedrooms, bathrooms, livingRoom, status} = req.body
    const room = new Room({
        roomType,
        pricePerDay,
        maxPeople,
        livingRoom,
        status,
        description: {
            bedrooms,
            bathrooms, 
            livingRoom
        }
    })

    try {
        await room.save()
        res.status(201).json({
            error: false,
            message: 'Room created.',
            elementInserted: room
        })
    } catch(error) {
        res.json({
            error: true,
            message: error.message
        })
    }
}

async function getAll(req , res, next) {
    try {
        const rooms = await Room.find({})
        res.json(rooms)
    } catch(error) {
        res.send({
            error: true,
            message: error.message
        })
    }
}

async function getRoom(req, res, next) {
    const roomId = req.params.id
    try {
        const reservation = await Reservation.findOne({roomId})
        if(!reservation) {
            const updatedRoom = await Room.findOneAndUpdate({_id: roomId}, {status: 'available'}, {new: true})
            return res.json(updatedRoom)
        }
        const room = await Room.findOne({_id: roomId})
        res.json(room)
    } catch(error) {
        res.json({
            error: true,
            message: error.message
        })
    }
}

async function updateRoom(req, res, next) {
    const roomId = req.params.id
    const noEmptyObject = GenerateObject.removeEmptyFields(req.body)
    try {
        // Create the document with the description field in the database
        // The description field is overwritten by the incoming object
        await Room.updateOne({_id: roomId}, {...noEmptyObject}, {new: true})
        
        // Update the description fields
        if(noEmptyObject.bedrooms) {
            await Room.updateOne(
                {_id: roomId},
                {$set: {"description.bedrooms": noEmptyObject.bedrooms}}
            )
        }

        if(noEmptyObject.bathrooms) {
            await Room.updateOne(
                {_id: roomId},
                {$set: {"description.bathrooms": noEmptyObject.bathrooms}}
            )
        }

        if(noEmptyObject.livingRoom) {
            await Room.updateOne(
                {_id: roomId},
                {$set: {"description.livingRoom": noEmptyObject.livingRoom}}
            )
        }

        res.status(201).json({
            error: false,
            message: 'Room updated.',
        })

    } catch(error){
        res.json({
            error: true,
            message: error.message
        })
    }
}

async function deleteRoom(req, res, next) {
    const roomId = req.params.id
    try {
        await Room.deleteOne({_id: roomId})
        res.json({
            error: false,
            message: 'Room deleted'
        })
    } catch(error) {
        res.json({
            error: true,
            message: error.message
        })
    }

    

}

module.exports = {newRoom, getAll, getRoom, updateRoom, deleteRoom}