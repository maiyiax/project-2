const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Plant, Room, Home } = require('../models');
const withAuth = require('../utils/auth');

// get all plants that belongs to User
router.get('/', withAuth, (req, res) => {
    Plant.findAll({
        where: {
            user_id: req.session.user_id
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
        ],
        include: [
            {
                model: Room,
                attributes: ['id','room_name']
            },
            {
                model: Home,
                attributes: ['id', 'home_name']
            }
        ]
    })
    .then(dbPlantData => {
        const plants = dbPlantData.map(plant => plant.get({ plain: true }));
        res.render('dashboard', { plants, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Review a single plant
// router.get('')

module.exports = router;