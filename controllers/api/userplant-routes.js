const router = require('express').Router();
const { User, Plant, Room, Userplant } = require('../../models');
const withAuth = require('../../utils/auth');

// get all plants /api/plants
router.get('/', (req, res) => {
    Userplant.findAll({
        attributes: [ 'id', 'plant_id', 'user_id']
    })
    .then(dbPlantData => res.json(dbPlantData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// create plant  /api/plants
router.post('/', (req, res) => {
    // expects {common_name: ''}
    Userplant.create(req.body)
        .then(dbPlantData => res.json(dbPlantData))
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        });
});

module.exports = router