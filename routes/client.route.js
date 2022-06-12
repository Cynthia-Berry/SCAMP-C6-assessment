const express = require('express');
const {toUUID} = require('to-uuid');
const router = express.Router();
const Client = require('../models/client.model');

router.get('/', async (req, res) => {
    // Fetch clients from database
    let clients = await Client.findAll();
    //Set view data
    let data = {
        clients: clients
    };
    //Render the view
    console.log(data)
    res.render('clients', data);
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
    const {firstName, lastName, email, phone} = req.body;
    await Client.create(req.body).save();
    res.render('client', {client: req.body});
});

router.delete('/:id', async (req, res) => {
    console.log(req.params['id'])
    await Client.destroy({
        where: {
            id: req.params['id']
        }
    })
    res.send(`Hello DELETE`);
});

module.exports = router;