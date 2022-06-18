const successCodes = require("../../enums/successCodes.enum");
const errorCodes = require("../../enums/errorCodes.enum");

const sendError = () => {
  return {
    status: errorCodes.Error400.code, type: errorCodes.Error400.type,
    message: `One or more email got an error trying to send email`
  };
}

const sendSuccess = () => {
  return {
    status: successCodes.Success200.code, type: successCodes.Success200.type,
    message: `Email sent successfully`
  };
}

module.exports = {
  sendError,
  sendSuccess,
};