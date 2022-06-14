const express = require('express');
const router = express.Router();

const {getInvoice, createInvoice, getInvoiceById, updateInvoice, deleteInvoice} = require('../controllers/invoice.controller')

router.get('/', getInvoice);

router.post('/', createInvoice);

router.get('/:id', getInvoiceById);

router.patch('/:id', updateInvoice);

router.delete('/:id', deleteInvoice);

module.exports = router;