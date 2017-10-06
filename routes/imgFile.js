// var express = require('express')
// var app = express()
// var router = express.Router();
// var multer  = require('multer')


// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'files/')
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now() + ".jpg")
//     }
//   })
  
//   var upload = multer({ storage: storage }.single('timelineImg'))

  
//   router.post('/livefeed/:id/:time', function (req, res) {
//     let files = {
//         img: fs.readFileSync(req.file.path),
//         imgType: req.file.mimetype
//       };
//       let myPost = {reqbody, files};
//       Post.create(myPost).then(post => {
//         console.log(post);
//         res.redirect('/');
//       });
//     upload(req, res, function (err) {
//       if (err) {
//         // An error occurred when uploading
//       }
//       res.json({
//           success: true,
//           message: "image uploaded"
//       })
  
//       // Everything went fine
//     });
//   });

//   router.get('/livefeed/:id/:time', function (req, res, next) {
//     let id = req.params.id;
//     Post.findOne({where: {id}}).then(post => {
//       res.contentType(post.imgType);
//       res.send(post.img);
//     })
//   });

//   module.exports = router;