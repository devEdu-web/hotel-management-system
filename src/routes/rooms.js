const {newRoom} = require('../components/rooms/rooms')
const router = require('express').Router()


router.post('/new', newRoom)


module.exports = router