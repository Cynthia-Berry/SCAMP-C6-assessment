const express = require('express');
const router = express.Router();
const  InvoiceController = require('../controllers/invoice.controller')
const InputValidator = require("../middlewares/helpers/validators/validator.service");
const AuthValidator = require("../middlewares/helpers/validators/auth.validator");


router.get(
  '/',
  AuthValidator.verifyToken,
  InvoiceController.getInvoice
);

router.post(
  '/create',
  AuthValidator.verifyToken,
  InputValidator("validators", "invoiceRecord"),
  InvoiceController.createInvoice
);

router.get(
  '/:id',
  AuthValidator.verifyToken,
  InvoiceController.getInvoiceById
);

router.patch(
  '/:id',
  AuthValidator.verifyToken,
  InputValidator("validators", "invoiceRecord"),
  InvoiceController.updateInvoice
);

router.delete(
  '/:id',
  AuthValidator.verifyToken,
  InvoiceController.deleteInvoice
);

module.exports = router;