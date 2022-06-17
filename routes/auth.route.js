const express = require('express');
const validator = require("../middlewares/helpers/validators/validator.service");
const {signIn, signUp} = require("../controllers/auth.controller");
const router = express.Router();


router.post('/register', signUp);

router.post('/login', validator("validators", "loginValidator"), signIn);

module.exports = router;