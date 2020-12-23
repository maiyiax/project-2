const router = require('express').Router()
const { User, Home, Room, Plant, UserPlant } = require('../models')
const withAuth = require('../utils/auth')

router.get('/', withAuth, (req, res) => {
    UserPlant.findAll({
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
    .then(dbUserData => {
        const userData = dbUserData.map(data => data.get({ plain: true }))
        res.render('addPlant', { userData, loggedIn: true })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

router.get('/edit/:id', withAuth, (req, res) => {
    UserPlant.findOne({
        where: {
            id: req.params.id
        },
        attributes: []
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' })
            return
        } 

        // serialize the data
        const post = dbPostData.get({ plain: true })

        // pass data to template
        res.render('edit-post', {
            post,
            loggedIn: req.session.loggedIn
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

module.exports = router