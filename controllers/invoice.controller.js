const Invoice = require("../models/invoice.model");

const getInvoice = async (req, res) => {
    let invoices = await Invoice.findAll();
    res.render('invoice', {invoices: invoices, editMode: false});
};

const createInvoice = async (req, res) => {
    await Invoice.create(req.body);
    res.render('invoice', {invoices: await Invoice.findAll()});
};

const getInvoiceById = async (req, res) => {
    const invoice = await Invoice.findByPk(req.params['id']);
    res.render('invoice', {invoices: [invoice]})

};

const updateInvoice = async (req, res) => {
    await Invoice.findByPk(req.params['id']).then(invoice => {
        invoice.save();

    }).then(result => {
        res.render('invoice', {invoices: [result]});
    });
};

const deleteInvoice = async (req, res) => {
    await Invoice.findByPk(req.params['id']).then(invoice => {
        return invoice.destroy();
    }).then(() => {
        console.log('INVOICE IS DELETED')
        res.redirect('/invoice');
    });
};

module.exports = {
    getInvoice,
    createInvoice,
    getInvoiceById,
    updateInvoice,
    deleteInvoice
}