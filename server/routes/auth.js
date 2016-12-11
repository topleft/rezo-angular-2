var express = require('express');
var router = express.Router();
var request = require('request');
var qs = require('querystring');
var models = require('../models/index');
var config = require('../../_config');
var jwt = require('jwt-simple');
var helper = require('../logic/auth-logic');

//**   google auth    **//
router.post('/google', function(req, res) {
 var accessTokenUrl = 'https://accounts.google.com/o/oauth2/token';
 var peopleApiUrl = 'https://www.googleapis.com/plus/v1/people/me/openIdConnect';
 console.log("code: ",req.body.code);
 var params = {
   code: req.body.code,
   client_id: req.body.clientId,
   client_secret: config.GOOGLE_SECRET,
   redirect_uri: req.body.redirectUri,
   grant_type: 'authorization_code'
 };

 // Step 1. Exchange authorization code for access token.
 request.post(accessTokenUrl, { json: true, form: params }, function(err, response, token) {
   var accessToken = token.access_token;
   var headers = { Authorization: 'Bearer ' + accessToken };

   // Step 2. Retrieve profile information about the current user.
   request.get({ url: peopleApiUrl, headers: headers, json: true }, function(err, response, profile) {
      if (profile.error) {
        return res.status(500).send({message: profile.error.message});
      }
     // Step 3a. Link user accounts.
      if (req.headers.authorization) {
      // adapt for postgres
        models.User.find({
          where: {
            googleProfileID: profile.sub
          }
        }).then(function (existingUser) {
          if (existingUser) {
            return res.status(409).send({ message: 'There is already a Google account that belongs to you' });
          }
          var token = req.headers.authorization.split(' ')[1];
          var payload = jwt.decode(token, config.TOKEN_SECRET);
          models.User.find({
          where: {
            id: payload.sub
          }
          }).then(function(user){
            if (!user) {
              return res.status(400).send({ message: 'User not found' });
            }
            user.updateAttributes({
              username: profile.name,
              googleProfileID: profile.sub,
              email: profile.email
            }).then(function (user) {
              var token = helper.createToken(user);
              res.send({
                token: token,
                user: user
              });
            });
          });
        }).catch(function(err){console.log(err)});
     } else {
       // Step 3b. Create a new user account or return an existing one.
      models.User.find({
        where: {
          googleProfileID: profile.sub
        }
      }).then(function(existingUser) {
        if (existingUser) {
          return res.send({
            token: helper.createToken(existingUser),
            user: existingUser
          });
        }
        models.User.create({
          username: profile.name,
          googleProfileID: profile.sub,
          email: profile.email
        }).then(function (user) {
          var token = helper.createToken(user);
          res.send({
            token: token,
            user: user
          });
        });
      });
    }
   });
 });
});



module.exports = router;
