'use strict';

const express = require('express');
const app = express();
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const authCheck = jwt({
  secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        // YOUR-AUTH0-DOMAIN name e.g prosper.auth0.com
        jwksUri: "https://youth-sports.auth0.com/api/v2/.well-known/jwks.json"
    }),
    // This is the identifier we set when we created the API
    audience: '59cd0d574cffc15a101107fa',
    issuer: 'https://youth-sports.auth0.com/api/v2/',
    algorithms: ['RS256']
});

app.get('/client/src/pages/ManagerLogin', (req, res) => {


app.listen(3333);
console.log('Listening on localhost:3333')