const express = require('express');
const router = express.Router();

const Invoice = require('../models/invoice.model');


router.get('/', async (req, res) => {
    let invoices = await Invoice.findAll();
    res.render('invoice', {invoices: invoices});
});

router.post('/', async (req, res) => {
    console.log(req.body)
    const {invoiceRef, is_paid, discount, charge, balance} = req.body;
    await Invoice.create(req.body);
    res.render('invoice', {invoices: req.body});
});

router.get('/:id', async (req, res) => {
    const invoice = await Invoice.findByPk(req.params['id']);
    if (!invoice) {
        res.render('error', {code: 'Failed', title: 404})
    } else {
        res.render('invoice', {invoices: [invoice]})
    }
});

router.patch('/:id', (req, res) => {
    res.send(`Hello UPDATE`);
});

router.delete('/:id', async (req, res) => {
      await Invoice.destroy({
        where: {id: req.params['id']}
    })
    res.render('invoice');
});

module.exports = router;