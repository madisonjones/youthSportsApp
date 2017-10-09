var express = require ("express");
var router = express.Router();
var Announcements = require("../models/announcements.js")
var Discussion= require("../models/discussion.js")
var Livefeed= require("../models/livefeed.js")
var Members= require("../models/members.js")
var Schedule= require("../models/schedule.js")
var Teams= require("../models/teams.js")



//api routes go here

router.get("/discussion", function(req, res) {
    Discussion.findAll({})
    .then(function(dbPost) {
            res.json(dbPost)
    })
})


router.get("/announcements", function(req, res) {
    Announcements.findAll({})
    .then(function(dbPost) {
        res.json(dbPost)
    })
})

router.get("/schedule", function(req, res) {
    Schedule.findAll({})
    .then(function(dbPost) {
        res.json(dbPost)
    })
})



//post from livefeed
router.post('/livefeed/media/api', function(req, res) {
    // Get sent data.
    var post = req.body;
    // Do a MySQL query.
    var query = connection.query('INSERT INTO users SET ?', post, function(err, result) {
      // Neat!
    });
    res.end('Success');
  });


module.exports = router