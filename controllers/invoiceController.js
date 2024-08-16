const Invoice = require('../models/Invoice');

exports.createInvoice = async (req, res) => {
  try {
    const { invoiceNumber, recruiterName, amount, gstNumber, invoiceUrl } = req.body;
    const invoice = await Invoice.create({
      invoiceNumber,
      recruiterName,
      amount,
      status: 'Pending',
      gstNumber,
      invoiceUrl,
    });
    res.status(201).json(invoice);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.status(200).json(invoices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getInvoiceById = async (req, res) => {
  try {
    const invoice = await Invoice.findById(req.params.id);
    if (!invoice) {
      return res.status(404).json({ message: 'Invoice not found' });
    }
    res.status(200).json(invoice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};