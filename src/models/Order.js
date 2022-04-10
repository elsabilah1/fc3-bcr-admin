const mongoose = require('mongoose')

const currentDate = new Date()
const nextWeekDate = new Date(new Date().setDate(currentDate.getDate() + 7))

const orderSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    car: {
      type: String,
      required: true,
    },
    start_rent: {
      type: String,
      required: false,
      default: currentDate.toISOString(),
    },
    finish_rent: {
      type: String,
      required: false,
      default: nextWeekDate.toISOString(),
    },
    price: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema)

module.exports = Order
