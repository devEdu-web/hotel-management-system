const {newRoom, getAll, getRoom} = require('../components/rooms/rooms')
const router = require('express').Router()


router.post('/new', newRoom)
router.get('/all', getAll)
router.get('/find/:id', getRoom)

module.exports = router