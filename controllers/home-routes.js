const router = require('express').Router()
const { User, Home, Room, Plant, Userplant } = require('../models')

router.get('/', (req, res) => {
    Plant.findAll({
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
    })
    .then(dbPlantData => {
        // serialize the data
        const plants = [];
        const data = dbPlantData.map(plant => plant.get({ plain: true }));

        // randomize 5 plants to display
        for (let i = 0; i < 5; i++) {
            let randomNumber = Math.floor(data.length * Math.random());

            let randomPlants = data.splice(randomNumber, 1);
            plants.push(randomPlants);
        }
        // console.log(plants)
        res.render('addPlant', { plants, data, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/')
        return
    }
  
    res.render('login')
})

// review a single plant
// router.get('/:id', (req, res) => {
//     Plant.findOne(req.params.id, {
//         attributes: [
//             'id',
//             'common_name',
//             'scientific_name',
//             'image_url',
//             'description',
//             'care_level',
//             'toxicity',
//             'water'
//         ]
//     })
//     .then(dbPlantData => {
//         if (!dbPlantData) {
//             res.status(404).json({ message: 'No plant2 found with this id!' });
//             return;
//         }
        
//         const plant = dbPlantData.get({ plain: true });
//         console.log(plant);
//         // where is this being rendered?
//         // need to be logged in to review?
//         res.render('single-plant', {
//             plant,
//             loggedIn: req.session.loggedIn
//         });
//     });
// });

module.exports = router;
