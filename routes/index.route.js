const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {title: 'Payment Reminder Application'});
});

module.exports = router;