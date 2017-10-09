var express = require ("express");
var router = express.Router();
var Announcements = require("../models/announcements.js")
var Discussion= require("../models/discussion.js")
var Livefeed= require("../models/livefeed.js")
var Members= require("../models/members.js")
var Schedule= require("../models/schedule.js")
var Teams= require("../models/teams.js")
var Media = require("../models/media.js")



//api routes go here

router.get("/discussion", function(req, res) {
    Discussion.findAll({})
    .then(function(dbPost) {
            res.json(dbPost)
    })
})

router.post("/discussion/post", function(req, res) {
    Discussion.create({
        title: "hi",
        comment: "there",
        createdAt: Date,
        userID: 1
    })
})


router.get("/announcements", function(req, res) {
    Announcements.findAll({})
    .then(function(dbPost) {
        res.json(dbPost)
    })
})


router.post("/livefeed/media/api", function(req, res) {
    Media.create({
        link: req.body.img,
        comment: req.body.comment
        // score: req.score
    })
})


router.get("/livefeed/media/api", function(req, res) {
    Media.findAll({})
    .then(function(mediaPost) {
        res.json(mediaPost)
    })
})



//post from livefeed
router.post('/livefeed/:id/:time', function(req, res) {
    // Get sent data.
    var post = req.body;
    // Do a MySQL query.
    var query = connection.query('INSERT INTO users SET ?', post, function(err, result) {
      // Neat!
    });
    res.end('Success');
  });


module.exports = router