const router = require('express').Router()

router.get('/', (req,res) => {
    res.render("addPlant")
})
module.exports=router;