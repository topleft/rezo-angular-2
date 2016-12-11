var express = require('express');
var router = express.Router();
var models = require('../models/index');


router.post('/event/create', function(req, res, next) {
  console.log("up in the event create route");
    models.Event.create({
        SpaceId: req.body.SpaceId,
        UserId: req.body.UserId,
        date: req.body.date, 
        time: req.body.time, 
        totalGuests: req.body.totalGuests, 
        cost: req.body.cost, 
        specialRequests: req.body.specialRequests, 
        inviteList: req.body.inviteList, 
        barTab: req.body.barTab
    }).then(function(event){
        res.json(event);
    }).catch(function(err){
        res.json(err);
    });
}); 

router.put('/event/update/:eventId', function(req, res, next) {
  console.log("In event put", req.params)
    models.Event.find({
      where: {
        id: parseInt(req.params.eventId)
      }
    }).then(function(data){
      console.log("EVENT",data)
      data.updateAttributes({
        date: req.body.date, 
        time: req.body.time, 
        totalGuests: req.body.totalGuests, 
        cost: req.body.cost, 
        specialRequests: req.body.specialRequests, 
        inviteList: req.body.inviteList, 
        barTab: req.body.barTab
      }).then(function(event){
          res.json(event);
      }).catch(function(err){
          res.json(err);
      });
    });
}); 


router.get('/event/:eventId', function(req, res) {
  console.log(req.params)
    models.Event.find({
        where: {
            id: req.params.eventId
        }
    }).then(function(result){
        res.json(result);        
    }).catch(function (err) {
        res.json({msg: "No events for this "+req.params.space+", or incorrect name."});
    });
});


router.get('/events/:spaceId', function(req, res) {
  console.log(req.params)
    models.Event.findAll({
        where: {
            id: req.params.spaceId
        }
    }).then(function(result){
        res.json(result);        
    }).catch(function (err) {
        res.json(err);
    });
});

router.delete('/event/delete/:eventId', function(req, res) {
    models.Event.destroy({
        where: {
            id: parseInt(req.params.eventId)
        }
    }).then(function(event){
        res.json({msg: "Event deleted."});
    }).catch(function(err) {
        res.json(err);
    });
});



module.exports = router;
