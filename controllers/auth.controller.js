//SOURCE: https://www.freecodecamp.org/news/how-to-authenticate-users-and-implement-cors-in-nodejs-applications/
const bcrypt = require("bcrypt"), jwt = require("jsonwebtoken");
const UserModel = require('../models/user.model');
const userController = require('./user.controller');
const AuthResponse = require("../middlewares/helpers/responses/auth.response");
const User = require("../models/user.model");
const UserResponse = require("../middlewares/helpers/responses/user.response");

const signIn = (req, res) => {
  try {
    const {email, password} = req.body;
    UserModel.findOne({where: {email: email}}).then(async user => {
      const encryptedUserPassword = await bcrypt.compare(password, user.password);
      if (!user) {
        const response = AuthResponse.logInError()
        return res.status(response.status).json({status: response.type, message: response.message});
      }

      if (user && encryptedUserPassword) {
        const response = AuthResponse.userLoginResponse();
        const userToken = jwt.sign(
          {user_id: user.id}, process.env.TOKEN_KEY, {expiresIn: "5h"}
        );

        await User.update({token: userToken}, {where: {id: user.id}});
        user.token = userToken;
        res.status(response.status).json({
          token: user.token, status: response.type, message: response.message
        });
      }
    });

  } catch (error) {
    console.log(error)
    const response = UserResponse.getUserError(error.errors[0].message)
    res.status(response.status).json({status: response.type, message: response.message});
  }
};

const signUp = async (req, res) => {
  try {
    const isUserExist = await UserModel.findOne({where: {email: req.body.email}});
    if (isUserExist) {
      const response = UserResponse.getUserExistError()
      return res.status(response.status).json({status: response.type, message: response.message});
    }
    await userController.createUser(req, res)
  } catch (error) {
    const response = UserResponse.getUserError(error.errors[0].message)
    res.status(response.status).json({status: response.type, message: response.message});
  }
};

module.exports = {signIn, signUp}
