const express = require('express')
const Post = require('../models/post')
const router = express.Router({
    mergeParams: true
})

router.get('/posts', async (req, res) => {
    res.json(await Post.find())
})

router.get('/post/:id', async (req, res) => {
    res.json(await Post.findById(req.params.id))
})

router.post('/posts', async (req, res) => {
    res.json(await Post.create(req.body))
})



module.exports = router