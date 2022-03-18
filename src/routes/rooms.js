const {newRoom, getAll} = require('../components/rooms/rooms')
const router = require('express').Router()


router.post('/new', newRoom)
router.get('/all', getAll)


module.exports = router