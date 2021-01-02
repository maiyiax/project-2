const router = require('express').Router();
const { User, Plant, Room } = require('../../models');
const withAuth = require('../../utils/auth');

// get all rooms
router.get('/', (req, res) => {
    Room.findAll({
        attributes: ['id', 'room_name'],
        // include plants in this room?
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
                ]
            }
        ]
    })
        .then(dbRoomData => res.json(dbRoomData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// get one room
router.get('/:id', (req, res) => {
    Room.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'room_name'],
        // include plants in this room?
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
                ]
            }
        ]

    })
        .then(dbRoomData => {
            if (!dbRoomData) {
                res.status(404).json({ message: 'No room found with this id!' });
                return;
            }
            res.json(dbRoomData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// create room
router.post('/', withAuth, (req, res) => {
    // expects {room_name: 'bedroom'}
    Room.create({
        room_name: req.body.room_name
    })
        .then(dbRoomData => res.json(dbRoomData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// update room
router.put('/:id', withAuth, (req, res) => {
    Room.update(
        req.body,
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbRoomData => {
            if (!dbRoomData) {
                res.status(404).json({ message: 'No room found with this id!' });;
                return;
            }
            res.json(dbRoomData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// delete room
router.delete('/:id', withAuth, (req, res) => {
    Room.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbRoomData => {
            if (!dbRoomData) {
                res.status(404).json({ message: 'No room found with this id!' });
                return;
            }
            res.json(dbRoomData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;