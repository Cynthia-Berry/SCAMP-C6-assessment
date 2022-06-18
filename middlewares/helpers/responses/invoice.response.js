const successCodes = require("../../enums/successCodes.enum");
const errorCodes = require("../../enums/errorCodes.enum");


const getInvoiceResponse = () => {
    return {
        status: successCodes.Success200.code, type: successCodes.Success200.type,
        message: `Invoice fetched Successfully`
    };
}

const createInvoiceResponse = () => {
    return {
        status: successCodes.Success201.code, type: successCodes.Success201.type,
        message: `Invoice Created Successfully`
    };
}

const updateInvoiceResponse = () => {
    return {
        status: successCodes.Success200.code, type: successCodes.Success200.type,
        message: `Invoice resources and information updated successfully`
    };
}

const deleteInvoiceResponse = () => {
    return {
        status: successCodes.Success204.code, type: successCodes.Success204.type,
        message: `Invoice resources and information deleted successfully`
    };
}

module.exports = {
    getInvoiceResponse,
    createInvoiceResponse,
    updateInvoiceResponse,
    deleteInvoiceResponse
}