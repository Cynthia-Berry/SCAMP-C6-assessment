const jwt = require("jsonwebtoken"), bcrypt = require("bcrypt");
const User = require("../models/user.model");
const Token = require("../models/auth.model");
const UserResponse = require("../middlewares/helpers/responses/user.response");

const getUser = (req, res) => {
  User.findAll()
    .then(users => {
      const response = UserResponse.getUserResponse();
      res.status(response.status).json({data: users, status: response.type, message: response.message});
    })
    .catch((error) => {
      const response = UserResponse.getUserError(error.errors[0].message)
      res.status(response.status).json({status: response.type, message: response.message});
    });
};

const createUser = async (req, res) => {
  const {firstName, lastName, email, phone, password, jobTitle} = req.body;
  const encryptedUserPassword = await bcrypt.hash(password, 10);

  User.create({
    firstName: firstName,
    lastName: lastName,
    email: email.toLowerCase(),
    phone: phone,
    password: encryptedUserPassword,
    jobTitle: jobTitle,
  }).then(async user => {
    const response = UserResponse.createUserResponse();
    const userToken = await jwt.sign(
      {user_id: user.id}, process.env.TOKEN_KEY, {expiresIn: "5h"}
    );
    await Token.create({token: userToken, userId: user.id})

    res.status(response.status).json({
      data: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        jobTitle: user.jobTitle,
        updatedAt: user.updatedAt,
        createdAt: user.createdAt,
      }, status: response.type, message: response.message
    });
  }).catch(error => {
    const response = UserResponse.getUserError(error.errors[0].message);
    res.status(response.status).json({status: response.type, message: response.message});
  });
};

const getUserById = (req, res) => {
  User.findByPk(req.params['id']).then(user => {
    const response = UserResponse.getUserResponse();
    res.status(response.status).json({
      data: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        jobTitle: user.jobTitle,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      }, status: response.type, message: response.message
    });
  }).catch(error => {
    const response = UserResponse.getUserError('User cannot be found');
    res.status(response.status).json({status: response.type, message: response.message});
  })
};

const updateUser = async (req, res) => {
  try {
    const user = await User.update(req.body, {
      where: {id: req.params['id']}
    });
    if (!user) {
      const response = UserResponse.getUserError('User Does not exist')
      res.status(response.status).json({status: response.type, message: response.message});
    } else {
      const updatedUser = await User.findByPk(req.params['id'])
      const response = UserResponse.getUserResponse();
      res.status(response.status).json({
        data: {
          id: updatedUser.id,
          firstName: updatedUser.firstName,
          lastName: updatedUser.lastName,
          email: updatedUser.email,
          phone: updatedUser.phone,
          jobTitle: updatedUser.jobTitle,
          createdAt: updatedUser.createdAt,
          updatedAt: updatedUser.updatedAt
        },
        status: response.type,
        message: response.message
      });
    }
  } catch (error) {
    const response = UserResponse.getUserError(error.errors[0].message);
    res.status(response.status).json({status: response.type, message: response.message});
  }
};

const deleteUser = (req, res) => {
  User.findByPk(req.params['id']).then(async resp => {
    await User.destroy({
      where: {id: resp.id}
    });
    const response = UserResponse.deleteUserResponse();
    res.status(response.status).json({status: response.type, message: response.message});
  }).catch(error => {
    const response = UserResponse.getUserError(error.errors[0].message)
    res.status(response.status).json({status: response.type, message: response.message});
  });
};

module.exports = {
  getUser,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
}