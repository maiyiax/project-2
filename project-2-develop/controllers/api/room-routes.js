const router = require('express').Router()
const { User, Plant, Room } = require('../../models')

// get all rooms
router.get('/', (req, res) => {
    Room.findAll({

    })
    .then(dbRoomData => res.json(dbRoomData))
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
})

// get one room
router.get('/:id', (req, res) => {
    Room.findOne({

    })
    .then(dbRoomData => {
        if (!dbRoomData) {
            res.status(404).json({ message: 'No room found with this id!' })
            return
        }
        res.json(dbRoomData)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

// create room
router.post('/', (req, res) => {
    // expects {}
    Room.create({

    })
    .then(dbRoomData => res.json(dbRoomData))
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
})

// update room
router.put('/:id', (req, res) => {
    Room.update({

    })
    .then(dbRoomData => {
        if (!dbRoomData) {
            res.status(404).json({ message: 'No room found with this id!' })
            return
        }
        res.json(dbRoomData)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

// delete room
router.delete('/:id', (req, res) => {
    Room.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbRoomData => {
        if (!dbRoomData) {
            res.status(404).json({ message: 'No room found with this id!' })
            return
        }
        res.json(dbRoomData)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

module.exports = router