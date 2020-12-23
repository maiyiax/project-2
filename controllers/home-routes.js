const router = require('express').Router();
const { Plant } = require('../models');


router.get('/', (req,res) => {
    res.render("homePage")
    Plant.findAll({
        
    })
    .then(dbPlantData => res.json(dbPlantData))
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })


  
})



module.exports=router;