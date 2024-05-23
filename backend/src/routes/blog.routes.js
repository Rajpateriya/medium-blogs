const express = require("express")
const router = express.Router();

const {createBlog  , updateBlog, deleteBlog , getAllBlogs} = require("../controllers/blog.controller")

router.post('/create', createBlog);
router.put('/update/:blogId' , updateBlog);
router.delete('/delete/:blogId' , deleteBlog);
router.get('/blogs' , getAllBlogs);

module.exports = router;