const express = require('express');
const router = express.Router();

router.get('/register', (req, res) => {
    res.render('auth/sign-up');
});

router.post('/register', (req, res) => {
    res.redirect('/');
});

router.get('/login', (req, res) => {
    res.render('auth/sign-in');
});

router.post('/login', (req, res) => {
  req.body
    res.redirect('/');
});

module.exports = router;