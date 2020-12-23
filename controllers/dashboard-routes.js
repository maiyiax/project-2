const router = require('express').Router()
const { User, Home, Room, Plant, Userplant } = require('../models')
const withAuth = require('../utils/auth')

router.get('/', (req, res) => {
    Userplant.findAll({
        attributes: [ 'id', 'plant_id', 'user_id' ],
        include: {
                model: Plant,
                attributes: [ 
                    'id',
                    'common_name',
                    'scientific_name',
                    'image_url',
                    'description',
                    'care_level',
                    'toxicity',
                    'water',
                    'room_id'
                ]
            }
    })
    .then(dbUserData => {
        const userData = dbUserData.map(data => data.get({ plain: true }))
        console.log(userData)
        res.render('dashboard', { userData, loggedIn: true })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

router.get('/more-info/:id', (req, res) => {
    Userplant.findOne({
        where: {
            plant_id: req.params.id
        },
        attributes: [ 'plant_id' ],
        include: [
            {
                model: Plant,
                attributes: [ 
                    'id',
                    'common_name',
                    'scientific_name',
                    'image_url',
                    'description',
                    'care_level',
                    'toxicity',
                    'water',
                    'room_id'
                ],
                include: {
                    model: Room,
                    attributes: [ 'id', 'room_name' ]
                }
            },
            {
                model: Home,
                attributes: [ 'id', 'home_name', 'room_id' ],
                include: {
                    model: Room,
                    attributes: [ 'id', 'room_name' ]
                }
            }
        ]
    })
    .then(dbPlantData => {
        if (!dbPlantData) {
            res.status(404).json({ message: 'No plant found1 with this id' })
            return
        } 

        const plant = dbPlantData.get({ plain: true })
        res.render('editPlant', {
            plant,
            loggedIn: req.session.loggedIn
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

module.exports = router
