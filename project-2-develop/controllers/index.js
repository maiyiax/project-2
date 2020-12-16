const express = require('express')
const router = require('express').Router()

const apiRoutes = require('./api')
const homeRoutes = require('./home-routes.js')
const dashboardRoutes = require('./dashboard-routes.js')

router.use('/api', apiRoutes)
//router.use('/', homeRoutes)
//router.use('/dashboard', dashboardRoutes)
router.get('/',(req,res)=>{
    res.render('./layouts/main.handlebars')
})

router.use((req, res) => {
    res.status(404).end()
})



module.exports = router