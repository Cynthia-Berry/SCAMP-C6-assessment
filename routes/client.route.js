const express = require('express');
const router = express.Router();
const ClientController = require('../controllers/client.controller');
const validator = require('../middlewares/helpers/validators/validator.service')


router.get('/', ClientController.getClient);

router.post('/create', validator("validators", "clientRecord"), ClientController.createClient);

router.get('/:id', ClientController.getClientById);

router.patch('/:id',validator("validators", "clientRecord"), ClientController.updateClient);

router.delete('/:id', ClientController.deleteClient);

module.exports = router;