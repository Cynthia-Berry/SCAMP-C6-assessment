const express = require('express');
const router = express.Router();

const User = require('../models/user.model');


router.get('/', (req, res) => {
    const users =  User.findAll();
    console.log(users.every(user => user instanceof User)); // true
    console.log("All users:", JSON.stringify(users, null, 2));
    res.send(`Hello GET`);
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