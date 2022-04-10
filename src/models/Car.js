const mongoose = require('mongoose')

const currentDate = new Date()
const nextWeekDate = new Date(new Date().setDate(currentDate.getDate() + 7))

const carSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
    },
    foto: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
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
  },
  {
    timestamps: true,
  }
)

const Car = mongoose.models.Car || mongoose.model('Car', carSchema)

module.exports = Car
