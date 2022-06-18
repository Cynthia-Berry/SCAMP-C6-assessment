const successCodes = require("../../enums/successCodes.enum");
const errorCodes = require("../../enums/errorCodes.enum");


const getClientResponse = () => {
    return {
        status: successCodes.Success200.code, type: successCodes.Success200.type,
        message: `Client fetched Successfully`
    };
}

const createClientResponse = () => {
    return {
        status: successCodes.Success201.code, type: successCodes.Success201.type,
        message: `Client Created Successfully`
    };
}

const updateClientResponse = () => {
    return {
        status: successCodes.Success200.code, type: successCodes.Success200.type,
        message: `Client resources and information updated successfully`
    };
}

const deleteClientResponse = () => {
    return {
        status: successCodes.Success204.code, type: successCodes.Success204.type,
        message: `Client resources and information deleted successfully`
    };
}

module.exports = {
    getClientResponse,
    createClientResponse,
    updateClientResponse,
    deleteClientResponse
}