const express = require('express');
const router = express.Router();
const {getClient, createClient, getClientById, updateClient, deleteClient} = require('../controllers/client.controller')

router.get('/', getClient);

router.post('/create', createClient);

router.get('/:id', getClientById);

router.patch('/:id', updateClient);

router.delete('/:id', deleteClient);

module.exports = router;