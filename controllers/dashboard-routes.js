const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Plant, Room, Home, Userplant } = require('../models');
// const withAuth = require('../utils/auth');

// get all plants that belongs to User
router.get('/', (req, res) => {
    Userplant.findAll({
        // where: {
        //     user_id: req.session.user_id
        // },
        attributes: [
            'plant_id'
        ],
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
                    'water'
                ],
            },

            // {
            //     model: Home,
            //     attributes: ['id', 'home_name', 'room_name']
            // },
            // {
            //     model: Room,
            //     attributes: ['room_name']
            // }
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