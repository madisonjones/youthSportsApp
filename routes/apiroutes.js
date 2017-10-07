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


module.exports = router