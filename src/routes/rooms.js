const {newRoom, getAll, getRoom, updateRoom} = require('../components/rooms/rooms')
const router = require('express').Router()


router.post('/new', newRoom)
router.get('/all', getAll)
router.get('/find/:id', getRoom)
router.put('/update/:id', updateRoom)

module.exports = router