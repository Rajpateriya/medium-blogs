const express = require("express")
const router = express.Router();

const {userSignUp} = require("../controllers/blog.controller")


router.post('/create', createBlog);

module.exports = router;