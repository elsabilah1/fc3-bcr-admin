const express = require('express')
const expressLayout = require('express-ejs-layouts')
const cookieParser = require('cookie-parser')
const path = require('path')
require('dotenv').config()
const app = express()

// view engine setup
app
  .use(express.static('public'))
  .use(expressLayout)
  .set('layout', 'layouts/default')
  .set('view engine', 'ejs')
  .set('views', path.join(__dirname, '/src/views'))

// middlewares setup
app
  .use(express.json())
  .use(cookieParser())
  .use(express.urlencoded({ extended: false }))
  .use((req, res, next) => {
    res.locals.url = req.originalUrl
    next()
  })

// database setup
require('./src/configs/db')

// routes setup
app.use('/', require('./src/routes'))

// listen for connection
app.listen(process.env.PORT || 3000)
