const express = require("express")
const router = express.Router();

const {userSignUp} = require("../controllers/user.controller")


router.post('/signup', userSignUp);

module.exports = router;