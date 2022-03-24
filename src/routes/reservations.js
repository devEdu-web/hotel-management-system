const {newReservation} = require('../components/reservations/reservations')
const router = require('express').Router()


router.post('/new', newReservation)



module.exports = router