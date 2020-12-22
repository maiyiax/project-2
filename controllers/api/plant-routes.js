const router = require('express').Router()
const { User, Plant, Room } = require('../../models')

// get all plants
router.get('/plants', (req, res) => {
    res.render("addPlant")
    Plant.findAll({
        
    })
    .then(dbPlantData => res.json(dbPlantData))
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })

})

// get one plant
router.get('/:id', (req, res) => {
    Plant.findOne({

    })
    .then(dbPlantData => {
        if (!dbPlantData) {
            res.status(404).json({ message: 'No plant found with this id!' })
            return
        }
        res.json(dbPlantData)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

// create plant
router.post('/', (req, res) => {
    // expects {}
    Plant.create({

    })
    .then(dbPlantData => res.json(dbPlantData))
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
})

// update plant
router.put('/:id', (req, res) => {
    Plant.update({

    })
    .then(dbPlantData => {
        if (!dbPlantData) {
            res.status(404).json({ message: 'No plant found with this id!' })
            return
        }
        res.json(dbPlantData)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

// delete plant
router.delete('/:id', (req, res) => {
    Plant.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbPlantData => {
        if (!dbPlantData) {
            res.status(404).json({ message: 'No plant found with this id!' })
            return
        }
        res.json(dbPlantData)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

module.exports = router