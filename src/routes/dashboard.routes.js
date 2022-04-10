const router = require('express').Router()
const setLayout = require('../middlewares/setLayout')
const dashboard = require('../controllers/dashboard.controllers')

router.use(setLayout('main')).get('/', dashboard.getDashboard)

module.exports = router
