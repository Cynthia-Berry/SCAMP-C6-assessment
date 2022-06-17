const express = require('express');
const router = express.Router();
const UserController = require("../controllers/user.controller");
const validator = require("../middlewares/helpers/validators/validator.service");
const AuthValidator = require("../middlewares/helpers/validators/token.validator");


router.get('/',
  AuthValidator.verifyToken,
  UserController.getUser
);

router.post(
  validator("validators", "userRecord"),
  UserController.createUser
);

router.get(
  '/:id',
  AuthValidator.verifyToken,
  UserController.getUserById
);

router.patch(
  '/:id',
  AuthValidator.verifyToken,
  validator("validators", "userRecord"),
  UserController.updateUser
);

router.delete('/:id',AuthValidator.verifyToken, UserController.deleteUser);

module.exports = router;