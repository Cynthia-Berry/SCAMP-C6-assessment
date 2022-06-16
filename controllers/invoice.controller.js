const Invoice = require("../models/invoice.model");
const InvoiceResponse = require("../middlewares/helpers/responses/invoice.response");
const errorCodes = require("../middlewares/helpers/enums/errorCodes.enum");

const getInvoice = (req, res) => {
    Invoice.findAll()
        .then(invoices => {
            const response = InvoiceResponse.getInvoiceResponse();
            res.status(response.status).json({data: invoices, status: response.type, message: response.message});
        })
        .catch((error) => {
            const response = error.errors[0]
            res.status(errorCodes.Error400.code).json({status: errorCodes.Error400.type, message: response.message});
        });
};

const createInvoice = (req, res) => {
    Invoice.create(req.body).then((invoice) => {
        const response = InvoiceResponse.createInvoiceResponse();
        res.status(response.status).json({data: invoice, status: response.type, message: response.message});
    }).catch(error => {
        const response = error.errors[0]
        res.status(errorCodes.Error400.code).json({status: errorCodes.Error400.type, message: response.message});
    });
};

const getInvoiceById = (req, res) => {
    Invoice.findByPk(req.params['id']).then(invoice => {
        const response = InvoiceResponse.getInvoiceResponse();
        res.status(response.status).json({data: invoice, status: response.type, message: response.message});
    }).catch(error => {
        const response = error.errors[0]
        res.status(errorCodes.Error400.code).json({status: errorCodes.Error400.type, message: response.message});
    })
};

const updateInvoice = async (req, res) => {
    try {
        const invoice = await Invoice.update(req.body, {
            where: {id: req.params['id']}
        });
        if (!invoice) {
            res.status(errorCodes.Error400.code).json({status: errorCodes.Error400.type, message: ''});
        } else {
            const response = InvoiceResponse.getInvoiceResponse();
            res.status(response.status).json({
                data: await Invoice.findByPk(req.params['id']),
                status: response.type,
                message: response.message
            });
        }
    } catch (e) {
        console.log(e);
        const response = e.errors[0]
        res.status(errorCodes.Error400.code).json({status: errorCodes.Error400.type, message: response.message});
    }
};

const deleteInvoice = (req, res) => {
    Invoice.findByPk(req.params['id']).then(async invoice => {
        await Invoice.destroy({
            where: {id: invoice.id}
        });
        const response = InvoiceResponse.deleteInvoiceResponse();
        res.status(response.status).json({status: response.type, message: response.message});
    }).catch(error => {
        console.log(error)
    });
};

module.exports = {
    getInvoice,
    createInvoice,
    getInvoiceById,
    updateInvoice,
    deleteInvoice
}