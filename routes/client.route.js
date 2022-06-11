const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(`Hello GET ${req.body}`);
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