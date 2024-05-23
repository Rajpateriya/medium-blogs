const express = require("express");
const {userSignup,  userSignin ,getAllUsers} = require("../controllers/user.controller")


const router = express.Router();

router.post('/signup', userSignup);
router.post('/signin', userSignin);
router.get('/users' , getAllUsers)

module.exports = router;