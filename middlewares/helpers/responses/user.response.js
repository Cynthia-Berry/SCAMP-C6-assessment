const successCodes = require("../enums/successCodes.enum");
const errorCodes = require("../enums/errorCodes.enum");


const getUserResponse = () => {
    return {
        status: successCodes.Success200.code, type: successCodes.Success200.type,
        message: `User fetched Successfully`
    };
}

const createUserResponse = () => {
    return {
        status: successCodes.Success201.code, type: successCodes.Success201.type,
        message: `User Created Successfully`
    };
}

const updateUserResponse = () => {
    return {
        status: successCodes.Success200.code, type: successCodes.Success200.type,
        message: `User resources and information updated successfully`
    };
}

const deleteUserResponse = () => {
    return {
        status: successCodes.Success204.code, type: successCodes.Success204.type,
        message: `User resources and information deleted successfully`
    };
}

module.exports = {
    getUserResponse,
    createUserResponse,
    updateUserResponse,
    deleteUserResponse
}