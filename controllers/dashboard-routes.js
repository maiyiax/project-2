const router = require('express').Router()
const { User, Home, Room, Plant, Userplant } = require('../models')
const withAuth = require('../utils/auth')

router.get('/', (req, res) => {
    Userplant.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: ['id', 'plant_id', 'user_id'],
        include: [
            {
                model: Home,
                attributes: ['id', 'home_name', 'user_id']
            },
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
                    'water'
                ]
            },
        ]
    })
        .then(dbUserData => {
            const userData = dbUserData.map(data => data.get({ plain: true }));
            console.log(userData);
            res.render('dashboard', { userData, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.get('/more-info/:id', (req, res) => {
    Plant.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'common_name',
            'scientific_name',
            'image_url',
            'description',
            'care_level',
            'toxicity',
            'water'
        ]
    })
    .then(dbPlantData => {
        if (!dbPlantData) {
            res.status(404).json({ message: 'No plant found with this id!' })
            return
        }
        
        const plant = dbPlantData.get({ plain: true })
        res.render('editPlant', {
            plant,
            loggedIn: req.session.loggedIn
        })
    })
})

module.exports = router
