const mongoose = require('mongoose');

const reminderSchema = new mongoose.Schema({
  reminderDate: { type: Date, required: true },
  gstAmount: { type: Number, required: true },
  status: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Reminder = mongoose.model('Reminder', reminderSchema);

module.exports = Reminder;