const Invoice = require("../models/invoice.model");

const getInvoice = async (req, res) => {
    let invoices = await Invoice.findAll();
    res.render('invoice', {invoices: invoices});
};

const createInvoice = async (req, res) => {
    await Invoice.create(req.body);
    res.render('invoice', {invoices: await Invoice.findAll()});
};

const getInvoiceById = async (req, res) => {
    const invoice = await Invoice.findByPk(req.params['id']);
    res.render('invoice', {invoices: [invoice]})

};

const updateInvoice = (req, res) => {
    res.send(`Hello UPDATE`);
};

const deleteInvoice = async (req, res) => {
    await Invoice.destroy({
        where: {id: req.params['id']}
    })
    res.render('invoice');
};

module.exports = {
    getInvoice,
    createInvoice,
    getInvoiceById,
    updateInvoice,
    deleteInvoice
}