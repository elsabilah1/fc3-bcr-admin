const Car = require('../models/Car')
const fs = require('fs')

exports.getListCar = async (req, res) => {
  const { keyword, cat } = req.query
  let cars = await Car.find()

  if (keyword !== undefined) {
    cars = cars.filter((car) => car.name.toLowerCase().includes(keyword))
  }

  if (cat !== 'all' && cat !== undefined) {
    cars = cars.filter((car) => car.category === cat)
  }

  res.render('pages/list-car', { title: 'Cars', cars })
}

exports.deleteCar = async (req, res) => {
  const { id } = req.params

  const car = await Car.findById(id)

  const fotoPath = car.foto

  // delete previews image
  fs.unlinkSync('public' + fotoPath)

  await Car.findByIdAndRemove(id)

  return res.status(200).json({ message: 'Data Berhasil Dihapus' })
}

exports.getAddNewCar = (req, res) => {
  res.render('pages/list-car/add-new-car', { title: 'Cars' })
}

exports.postAddNewCar = async (req, res) => {
  const { name, price, category, start_rent, finish_rent } = req.body

  const filename = req.file.filename
  const foto = '/uploads/' + filename

  await Car.create({
    name,
    price,
    foto,
    category,
    start_rent,
    finish_rent,
  })

  return res.status(201).json({ message: 'Data Berhasil Disimpan' })
}

exports.getEditCar = async (req, res) => {
  const { id } = req.query

  const car = await Car.findById(id)

  res.render('pages/list-car/edit-car', { title: 'Cars', car })
}

exports.putEditCar = async (req, res) => {
  const { id } = req.params

  const car = await Car.findById(id)

  const fotoPath = car.foto

  // delete previews image
  if (req.file) {
    fs.unlinkSync('public' + fotoPath)
  }

  const { name, price, category, start_rent, finish_rent } = req.body

  const filename = req.file ? req.file.filename : null
  const foto = filename ? '/uploads/' + filename : fotoPath

  await Car.findByIdAndUpdate(id, {
    name,
    price,
    foto,
    category,
    start_rent,
    finish_rent,
  })

  return res.status(200).json({ message: 'Data Berhasil Diperbarui' })
}
