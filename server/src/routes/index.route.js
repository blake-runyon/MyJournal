const express = require('express')
const Post = require('./models/post')
const router = express.Router({
    mergeParams: true
})

router.get('/', (req, res) => {
    res.json(Post.find())
})

module.exports = {router}