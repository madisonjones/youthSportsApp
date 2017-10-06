var express = require('express')
var app = express()
var router = express.Router();
var multer  = require('multer')
var upload = multer({ dest: "../files"})




router.post("/livefeed/:id/:time", upload.single("timelineImg"), function(req, res, next) {
    console.log(req.file);
})

  router.get('/livefeed/:id/:time', function (req, res, next) {
    let id = req.params.id;
    Post.findOne({where: {id}}).then(post => {
      res.contentType(post.imgType);
      res.send(post.img);
    })
  });

  module.exports = router;