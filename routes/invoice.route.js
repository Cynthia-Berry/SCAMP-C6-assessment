const express = require('express');
const router = express.Router();
const  InvoiceController = require('../controllers/invoice.controller')
const validator = require("../middlewares/helpers/validators/validator.service");


router.get('/', InvoiceController.getInvoice);

router.post('/create', validator("validators", "invoiceRecord"), InvoiceController.createInvoice);

router.get('/:id', InvoiceController.getInvoiceById);

router.patch('/:id',validator("validators", "invoiceRecord"), InvoiceController.updateInvoice);

router.delete('/:id', InvoiceController.deleteInvoice);

module.exports = router;