const express = require('express');
const invoiceController = require('../controllers/invoiceController');

const router = express.Router();

router.post('/invoices', invoiceController.createInvoice);
router.get('/invoices', invoiceController.getInvoices);
router.get('/invoices/:id', invoiceController.getInvoiceById);

module.exports = router;