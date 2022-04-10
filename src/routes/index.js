const router = require('express').Router()
const createError = require('http-errors')
const authenticate = require('../middlewares/authenticate')
const auth = require('./auth.routes')
const dashboard = require('./dashboard.routes')
const listCar = require('./cars.routes')

// Routes
router
  .get('/', (req, res) => res.redirect('/login'))
  .use('/', auth)
  .use('/dashboard', authenticate, dashboard)
  .use('/list-car', authenticate, listCar)

// error handler
router
  .use((req, res, next) => next(createError(404)))
  .use((err, req, res, next) => {
    res.locals.error = err
    res.status(err.status || 500)
    res.render('pages/error', { title: 'Error' })
  })

module.exports = router
