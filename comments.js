// create web server javascrpit file
// Purpose: create comments web server
// Creator: Austin
// Date: 2020-11-27

// import module
const express = require('express');
const router = express.Router();
const comments = require('../model/comments.js');
const user = require('../model/user.js');

// get request
router.get('/', async (req, res) => {
    const comment = await comments.getComments();
    res.send(comment);
});

// post request
router.post('/', async (req, res) => {
    const token = req.header('x-auth');
    const user_id = await user.getUserID(token);
    const comment = await comments.addComment(req.body.comment, user_id);
    res.send(comment);
});

// export module
module.exports = router;