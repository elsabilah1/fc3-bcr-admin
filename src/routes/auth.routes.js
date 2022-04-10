const router = require('express').Router()
const setLayout = require('../middlewares/setLayout')
const auth = require('../controllers/auth.controllers')

router
  .use(setLayout('auth'))
  .get('/login', auth.getLogin)
  .post('/login', auth.postLogin)
  .get('/logout', auth.logout)

module.exports = router
