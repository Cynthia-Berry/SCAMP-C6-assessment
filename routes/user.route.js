const express = require('express');
const router = express.Router();
const UserController = require("../controllers/user.controller");
const validator = require("../middlewares/helpers/validators/validator.service");


router.get('/', UserController.getUser);

router.post('/create', validator("validators", "userRecord"), UserController.createUser);

router.get('/:id', UserController.getUserById);

router.patch('/:id',validator("validators", "userRecord"), UserController.updateUser);

router.delete('/:id', UserController.deleteUser);

module.exports = router;