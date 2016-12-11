var express = require('express');
var router = express.Router();
var accountSid = 'ACd5f45830c9c4eabc03c7fe092f8e548e';
var authToken = process.env.TWILIO_SECRET;


if (accountSid && authToken) {
  //require the Twilio module and create a REST client
  var client = require('twilio')(accountSid, authToken);

  router.post('/twilio/mms', function(req, res, next) {
    client.messages.create({
      to: "+1"+req.body.phoneNumber,
      from: "+17203304367",
      body: req.body.message,
      mediaUrl: req.body.imageUrl
    }, function(err, message) {
      if (err) { res.json(err) };
      console.log(message);
      res.json({status: "Text message sent via Twilio.", message: message});
    });

  });

  router.post('/twilio/sms', function(req, res, next) {
    console.log(req.body)
    client.messages.create({
      to: "+1"+req.body.phoneNumber,
      from: "+17203304367",
      body: req.body.message
    }, function(err, message) {
      // if (err) { res.json(err) };
      console.log(message);
      res.json({status: "Text message sent via Twilio.", message: message});
    });

  });

} else {
  console.log("Twilio not configured.");
}

module.exports = router;
