var express = require("express");
var router = express.Router();
var Announcements = require("../models/announcements.js");
var Discussion = require("../models/discussion.js");
var Livefeed = require("../models/livefeed.js");
var Members = require("../models/members.js");
var Schedule = require("../models/schedule.js");
var Teams = require("../models/teams.js");
var Media = require("../models/media.js");
var LiveMessage = require("../models/liveMessage");
var Score = require("../models/score.js");

router.get("/discussion", function(req, res) {
  Discussion.findAll({}).then(function(dbPost) {
    res.json(dbPost);
  });
});

router.get("/announcements", function(req, res) {
  Announcements.findAll({}).then(function(dbPost) {
    res.json(dbPost);
  });
});

router.get("/schedule", function(req, res) {
  Schedule.findAll({}).then(function(dbPost) {
    res.json(dbPost);
  });
});

router.post("/live/messages", function(req, res) {
  console.log("THIS IS A POST" + JSON.stringify(req.body));
  LiveMessage.create({
    title: req.body.title,
    comment: req.body.comment
    // score: req.score
  });
});

router.get("/live/messages", function(req, res) {
  LiveMessage.findAll({}).then(function(mediaPost) {
    console.log(
      "-----------------------------------" +
        mediaPost +
        "-----------------------------------"
    );
    res.json(mediaPost);
  });
});

router.post("/live/images", function(req, res) {
  Media.create({
    link: req.body.link,
    comment: req.body.comment
    // score: req.score
  });
});

router.get("/live/images", function(req, res) {
  Media.findAll({}).then(function(mediaPost) {
    res.json(mediaPost);
  });
});

router.post("/live/videos", function(req, res) {
  Media.create({
    link: req.body.link,
    comment: req.body.comment
    // score: req.score
  });
});

router.get("/live/videos", function(req, res) {
  Media.findAll({}).then(function(mediaPost) {
    res.json(mediaPost);
  });
});


router.post("/livefeed/media/api", function(req, res) {
    console.log("POST MESSAGE FOR req: " + req.body)
    Score.create({
        teamOneScore: req.body.teamOneScore,
        teamTwoScore: req.body.teamTwoScore
    })
})

router.get("/livefeed/media/api", function(req, res) {
    Score.findAll({}).then(function(response) {
        res.json(response);
    })
})

module.exports = router;
