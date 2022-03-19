const Room = require('./Room')
const GenerateObject = require('../../utils/update.utils')

async function newRoom(req, res, next) {
    const {roomType, pricePerDay, maxPeople, bedrooms, bathrooms, livingRoom, status} = req.body
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
    const finalObject = GenerateObject.addDescriptionObject(noEmptyObject)
    try {
        const updatedRoom = await Room.findByIdAndUpdate({_id: roomId}, finalObject, {new: true})
        res.status(201).json({
            error: false,
            message: 'Room updated.',
            updatedRoom,
        })
    } catch(error){
        res.json({
            error: true,
            error: error.message
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