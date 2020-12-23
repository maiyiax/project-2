const router = require('express').Router()

router.get('/dashboard', (req,res) => {
    res.render("userDashboard")
})
module.exports=router;