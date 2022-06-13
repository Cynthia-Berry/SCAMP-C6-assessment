const express = require('express');
const router = express.Router();
const Client = require('../models/client.model');

router.get('/', async (req, res) => {
    let clients = await Client.findAll();
    res.render('clients', {clients: clients});
});

router.post('/create', async (req, res) => {
    const {firstName, lastName, email, phone} = req.body;
    await Client.create(req.body);
    res.render('client', {client: req.body});
});

router.get('/:id', async (req, res) => {
    const client = await Client.findByPk(req.params['id']);

    if (!client) {
        res.render('error', {code: 'Failed', title: 404})
    } else {
        res.render('client', {client: client})
    }
});

router.patch('/:id', async (req, res) => {
    await Client.create(req.body).save();
    res.render('client', {client: req.body});
});

router.delete('/:id', async (req, res) => {
    await Client.destroy({
        where: {id: req.params['id']}
    })
    res.render('client');
});

module.exports = router;