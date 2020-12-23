const router = require('express').Router()

router.get('/', (req,res) => {
    res.render("plants")
})
module.exports=router;