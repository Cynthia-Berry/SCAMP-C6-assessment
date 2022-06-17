const express = require('express');
const router = express.Router();
const ClientController = require('../controllers/client.controller');
const inputValidator = require('../middlewares/helpers/validators/validator.service');
const AuthValidator = require('../middlewares/helpers/validators/auth.validator');


router.get('/',AuthValidator.verifyToken, ClientController.getClient);

router.post(
  '/create',
  AuthValidator.verifyToken,
  inputValidator("validators", "clientRecord"),
  ClientController.createClient
);

router.get(
  '/:id',
  AuthValidator.verifyToken,
  ClientController.getClientById
);

router.patch(
  '/:id',
  AuthValidator.verifyToken,
  inputValidator("validators", "clientRecord"),
   ClientController.updateClient
);

router.delete('/:id', AuthValidator.verifyToken, ClientController.deleteClient);

module.exports = router;