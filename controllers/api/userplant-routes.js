const router = require('express').Router();
const { User, Plant, Room, Userplant } = require('../../models');
const withAuth = require('../../utils/auth');

// get all plants /api/plants
router.get('/', (req, res) => {
    Userplant.findAll({
        attributes: ['id', 'plant_id', 'user_id']
    })
        .then(dbPlantData => res.json(dbPlantData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// get one userplant /api/userplants/1
router.get('/:id', (req, res) => {
    Userplant.findOne({
        attributes: ['id', 'plant_id', 'user_id'],
        where: {
            id: req.params.id
        }
    })
        .then(dbUserPlantData => {
            if (!dbUserPlantData) {
                res.status(404).json({ message: 'No userplant found with this ID' });
                return;
            }
            res.json(dbUserPlantData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


// create userplant  /api/userplants
router.post('/', (req, res) => {
    // expects {common_name: ''}
    Userplant.create(req.body)
        .then(dbUserPlantData => res.json(dbUserPlantData))
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        });
});

// update a userplant info /api/userplants/1
router.put('/:id', withAuth, (req, res) => {
    Userplant.update(req.body,
        {
            where: {
                id: req.params.id
            }
        })
        .then(dbUserPlantData => {
            if (!dbUserPlantData) {
                res.status(404).json({ message: 'No userplant found with this id!' });
                return;
            }
            res.json(dbUserPlantData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });

});

// delete userplant  /api/userplants/1
router.delete('/:id', withAuth, (req, res) => {
    Userplant.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbUserPlantData => {
            if (!dbUserPlantData) {
                res.status(404).json({ message: 'No userplant found with this id!' });
                return;
            }
            res.json(dbUserPlantData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router