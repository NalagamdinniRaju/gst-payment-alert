const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  invoiceNumber: { type: String, required: true },
  recruiterName: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: String, required: true },
  gstNumber: { type: String, required: true },
  invoiceUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = Invoice;