const Car = require('../models/Car')
const Order = require('../models/Order')

exports.getDashboard = async (req, res) => {
  const { keyword } = req.query

  let cars = await Car.find()
  let orders = await Order.find()

  if (keyword !== undefined) {
    cars = cars.filter((car) => car.name.toLowerCase().includes(keyword))
    orders = orders.filter((order) => order.car.toLowerCase().includes(keyword))
  }

  const orderTitles = [
    'User Email',
    'Car',
    'Start Rent',
    'Finish Rent',
    'Price',
    'Status',
  ]

  const carTitles = [
    'Name',
    'Category',
    'Price',
    'Start Rent',
    'Finish Rent',
    'Created at',
    'Updated at',
  ]

  res.render('pages/dashboard', {
    title: 'Dashboard',
    orderTitles,
    carTitles,
    cars,
    orders,
  })
}
