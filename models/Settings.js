const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
  gstNumber: { type: String, required: true },
  invoiceUrl: { type: String, required: true },
  reminderDate: { type: Date, required: true },
  gstAmount: { type: Number, required: true },
});

const Settings = mongoose.model('Settings', settingsSchema);

module.exports = Settings;