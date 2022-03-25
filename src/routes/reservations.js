const {newReservation, getAll} = require('../components/reservations/reservations')
const router = require('express').Router()


router.post('/new', newReservation)
router.get('/all', getAll)



module.exports = router