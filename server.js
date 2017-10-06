'use strict';

const express = require('express');
const app = express();
const imgFile = require("./routes/imgFile.js");


app.use("/imgFile", imgFile);



// const jwt = require('express-jwt');
// const jwks = require('jwks-rsa');
// const cors = require('cors');
// const bodyParser = require('body-parser');
const mysql = require('mysql');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());

const connection = mysql.createConnection({
  host     : 'localhost',
  port     : '3306',
  user     : 'root',
  password : 'password!23',
  database : 'youthSports'
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});



// const authCheck = jwt({
//   secret: jwks.expressJwtSecret({
//         cache: true,
//         rateLimit: true,
//         jwksRequestsPerMinute: 5,
//         // YOUR-AUTH0-DOMAIN name e.g prosper.auth0.com
//         jwksUri: "https://youth-sports.auth0.com/api/v2/.well-known/jwks.json"
//     }),
//     // This is the identifier we set when we created the API
//     audience: '59cd0d574cffc15a101107fa',
//     issuer: 'https://youth-sports.auth0.com/api/v2/',
//     algorithms: ['RS256']
// });

// app.get('/client/src/pages/ManagerLogin', (req, res) => {


// app.listen(3333);
// console.log('Listening on localhost:3333')};

// import axios from 'axios';
// import multer from 'multer';


/**
 ... express.js boilerplate
 routes, middlewares, helpers, loggers, etc
**/

// configuring Multer to use files directory for storing files
// this is important because later we'll need to access file path
// const storage = multer.diskStorage({
//   destination: './files',
//   filename(req, file, cb) {
//     cb(null, `${new Date()}-${file.originalname}`);
//   },
// });

// const upload = multer({ storage });

// express route where we receive files from the client
// passing multer middleware
// app.post('/files', upload.single('file'), (req, res) => {
//  const file = req.file; // file passed from client
//  const meta = req.body; // all other values passed from the client, like name, etc..
 
 // send the data to our REST API
//  axios({
//     url: `https://api.myrest.com/uploads`,
//     method: 'post',
//     data: {
//       file,
//       name: meta.name,      
//     },
//   })
//    .then(response => res.status(200).json(response.data.data))
//    .catch((error) => res.status(500).json(error.response.data));
// });