const express = require('express');
const router = express.Router();
const validator = require('../middlewares/helpers/validators/validator.service')
const ClientController = require('../controllers/client.controller');


router.get('/', ClientController.getClient);

router.post('/create', validator("validators", "clientRecord"), ClientController.createClient);

router.get('/:id', ClientController.getClientById);

router.patch('/:id', ClientController.updateClient);

router.delete('/:id', ClientController.deleteClient);

module.exports = router;