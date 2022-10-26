const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  createdBy: {
    type: String,
    required: true
  }

}, {
  timestamps: true
})

module.exports = mongoose.model('order', orderSchema)