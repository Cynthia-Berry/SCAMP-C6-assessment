const express = require('express');
const router = express.Router();
const ejs = require('ejs')


router.get('/', (req, res) => {
  res.render('index', {title: 'Hello'});
});

module.exports = router;