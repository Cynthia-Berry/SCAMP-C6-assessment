const express = require('express');
const router = express.Router();

const User = require('../models/user.model');


router.get('/', async (req, res) => {
    const users = await User.findAll();
    res.render('user', {users: users});
});

router.post('/', (req, res) => {
    res.send(`Hello POST ${req.body}`);
});

router.get('/:id', (req, res) => {
    res.send(`Hello GET BY ID`);
});

router.patch('/:id', (req, res) => {
    res.send(`Hello UPDATE`);
});

router.delete('/:id', (req, res) => {
    res.send(`Hello DELETE`);
});

module.exports = router;