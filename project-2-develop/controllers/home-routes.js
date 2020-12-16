const router = require('express').Router()

router.get('/',(req,res)=>{
    res.sendFile('../veiws/layouts/main.handlebars')
})