const Room = require('./Room')

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

module.exports = {newRoom}