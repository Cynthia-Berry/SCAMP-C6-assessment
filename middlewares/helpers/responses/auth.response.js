const errorCodes = require("../enums/errorCodes.enum");
const successCodes = require("../enums/successCodes.enum");


const logInError = () => {
  return {
    status: errorCodes.Error400.code, type: errorCodes.Error400.type,
    message: 'Invalid Credentials'
  }
};

const userLoginResponse = () => {
  return {
    status: successCodes.Success202.code, type: successCodes.Success202.type,
    message: `Login Successful`
  };
};

const authenticationError = () => {
  return {
    status: errorCodes.Error403.code, type: errorCodes.Error403.type,
    message: `You do not have permission to perform this action`
  };
};

const invalidTokenError = () => {
  return {
    status: errorCodes.Error401.code, type: errorCodes.Error401.type,
    message: `Invalid Token`
  };
};

module.exports = {
  logInError,
  userLoginResponse,
  authenticationError,
  invalidTokenError
}