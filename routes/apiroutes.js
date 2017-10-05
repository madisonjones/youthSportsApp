var express = require ("express");
var router = express.Router();
var Announcements = require("../models/announcements.js")

//api routes go here
router.get("api", function(req, res) {
    Announcements.findAll({}).then(function(res) {
        res.json(res)
    })
})

router.post("/api/new", function(req, res) {
    Announcements.create({
        title: "game today!",
        comment:"be ready",
        author: "coach",
    }).then(function(res) {
        res.json(res)
    })
})

module.exports = router