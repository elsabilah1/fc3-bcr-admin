const router = require('express').Router()
const multer = require('multer')
const setLayout = require('../middlewares/setLayout')
const cars = require('../controllers/cars.controllers')

// setup multer for saving foto to uploads folder
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads')
  },
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + '-' + file.originalname)
  },
})

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ) {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

const upload = multer({
  storage: fileStorage,
  fileFilter: fileFilter,
})

router
  .use(setLayout('main'))
  .get('/', cars.getListCar)
  .get('/add-new-car', cars.getAddNewCar)
  .get('/edit-car', cars.getEditCar)
  .use(upload.single('foto'))
  .post('/add-new-car', cars.postAddNewCar)
  .put('/edit-car/:id', cars.putEditCar)
  .delete('/:id', cars.deleteCar)

module.exports = router
