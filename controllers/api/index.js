const router = require('express').Router();

const userRoutes = require('./user-routes');
const plantRoutes = require('./plant-routes');
const roomRoutes = require('./room-routes');
const userplantRoutes = require('./userplant-routes')

router.use('/users', userRoutes)
router.use('/plants', plantRoutes)
router.use('/rooms', roomRoutes)
router.use('/userplants', userplantRoutes)

module.exports = router