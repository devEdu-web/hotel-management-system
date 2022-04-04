const {
    newRoom,
    getAll,
    getRoom,
    updateRoom,
    deleteRoom,
} = require('../components/rooms/rooms.controller');

const router = require('express').Router();

router.post('/new', newRoom);
router.get('/all', getAll);
router.get('/find/:id', getRoom);
router.put('/update/:id', updateRoom);
router.delete('/delete/:id', deleteRoom);

module.exports = router;
