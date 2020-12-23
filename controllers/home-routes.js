const router = require('express').Router()
const { User, Home, Room, Plant, UserPlant } = require('../models')

router.get('/', (req, res) => {
    Plant.findAll({
        attributes: [
            'id',
            'common_name',
            'description'
        ],
    })
    .then(dbPlantData => {
        const plants = dbPlantData.map(plant => plant.get({ plain: true }));
        res.render('addPlant', {
            plants,
            loggedIn: req.session.loggedIn
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/')
        return
    }
  
    res.render('login')
})

module.exports = router