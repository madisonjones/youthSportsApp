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
var Game = require("../models/game.js");
const axios = require("axios");
const multer = require("multer");

var fs = require("fs");
var url = require('url');

const upload = multer({ dest: "../files" });

var type = upload.single("recfile");

router.post("/discussion", function(req, res) {
  Discussion.create({
    title: req.body.title,
    comment: req.body.comment
  })
})

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

router.post("/announcements", function(req, res) {
  Announcements.create({
    title: req.body.title,
    comment: req.body.comment
  })
})

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

router.post("/live/images", upload.single("avatar"), function(req, res) {
  // console.log("Body: " + req.body);
  console.log("File: " + req.file.path);
  

  req.body.type = true;
  let files = {
    link: fs.readFileSync(req.file.path),
    linkType: req.file.mimetype
  };
  

  Media.create({
    link: files,
    comment: req.body.comment
    // score: req.score
  }).then(post => {
    console.log("------------------------------------------Response : " + post);
  });
});

router.get("/live/images", function(req, res) {
  Media.findAll({}).then(function(mediaPost) {
    res.contentType(mediaPost.linkType);
    res.send(mediaPost.link.data);
  });
});

router.post("/live/videos", upload.single("avatar"), function(req, res) {
  console.log(req.body);
  console.log(req.file);

  req.body.type = true;
  let files = {
    link: fs.readFileSync(req.file.path),
    linkType: req.file.mimetype
  };

  Media.create({
    link: files,
    comment: req.body.comment
    // score: req.score
  }).then(post => {
    console.log(post);
  });
});

router.get("/live/videos", function(req, res) {
  Media.findAll({}).then(function(mediaPost) {
    res.json(mediaPost);
  });
});

router.post("/livefeed/media/api", function(req, res) {
  console.log("POST MESSAGE FOR req: " + req.body);
  Score.create({
    teamOneScore: req.body.teamOneScore,
    teamTwoScore: req.body.teamTwoScore,
    halfLetter: req.body.halfLetter
  });
});

router.get("/livefeed/media/api", function(req, res) {
  Score.findAll({}).then(function(response) {
    res.json(response);
  });
});

router.post("/livefeed/final", function(req, res) {
  Game.create({
    finalHomeScore: req.body.teamOneScore,
    finalHomeScore: req.body.teamTwoScore,
    finalHalf: req.body.halfLetter
  });
});

router.get("/livefeed/final", function(req, res) {
  Game.findAll({}),
    then(function(response) {
      res.json(response);
    });
});

module.exports = router;
