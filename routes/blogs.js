const express = require('express')
const router = express.Router();
const {getAllBlogs, createBlog, getBlog, updateBlog, deleteBlog} = require('../controllers/blogs')
const {protect} = require('../controllers/authentication')


router.route('/').get(protect, getAllBlogs).post(protect, createBlog)
router.route('/:id').get(protect, getBlog).patch(protect, updateBlog).delete(protect, deleteBlog)

module.exports = router;
