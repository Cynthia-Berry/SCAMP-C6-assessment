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

const getUserExistError = () => {
  return {
    status: errorCodes.Error409.code, type: errorCodes.Error409.type,
    message: `User Already Exist. Please Login!`
  }
};
const getUserError = (message) => {
  return {
    status: errorCodes.Error400.code, type: errorCodes.Error400.type,
    message: message
  }
}


module.exports = {
  getUserResponse,
  createUserResponse,
  updateUserResponse,
  deleteUserResponse,
  getUserExistError,
  getUserError
}