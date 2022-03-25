const {newReservation, getAll, getReservation, deleteReservation} = require('../components/reservations/reservations')
const router = require('express').Router()


router.post('/new', newReservation)
router.get('/all', getAll)
router.get('/find/:id', getReservation)
router.delete('/delete/:id', deleteReservation)


module.exports = router