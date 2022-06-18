const jwt = require("jsonwebtoken");
const AuthResponse = require("../responses/token.response");
const config = process.env;

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    const response = AuthResponse.authenticationError();
    return res.status(response.status).json({status: response.type, message: response.message});
  }
  try {
    req.user = jwt.verify(token, config.TOKEN_KEY);
  } catch (e) {
    const response = AuthResponse.invalidTokenError();
    return res.status(response.status).json({status: response.type, message: response.message});
  }
  return next();
};

module.exports = {verifyToken};