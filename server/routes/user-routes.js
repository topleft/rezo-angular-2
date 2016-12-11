var express = require('express');
var router = express.Router();
var models = require('../models/index');



router.put('/user/update/:userId', function(req, res, next) {
    models.User.find({
      where: {
        id: parseInt(req.params.userId)
      }
    }).then(function(data){
      data.updateAttributes({
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        companyName: req.body.companyName
      }).then(function(user){
          res.json(user);
      }).catch(function(err){
          res.json(err);
      });
    });
}); 


router.get('/user/:userId', function(req, res) {
    models.User.find({
        where: {
            id: req.params.userId
        }
    }).then(function(result){
        res.json(result);        
    }).catch(function (err) {
        res.json({msg: "No user for id "+req.params.userId+", or incorrect id."});
    });
});




module.exports = router;
