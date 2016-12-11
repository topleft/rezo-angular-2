var express = require('express');
var router = express.Router();
var models = require('../models/index');



router.post('/space/create', function(req, res, next) {
    models.Space.create({
        name: req.body.name,
        type: req.body.type,
        googlePlaceID: req.body.googlePlaceID,
        owner: req.body.owner,
        contactFirstName: req.body.contactFirstName,
        contactLastName: req.body.contactLastName,
        contactCellNumber: req.body.contactCellNumber,
        contactEmail: req.body.contactEmail,
        occupancy: req.body.occupancy
    }).then(function(space){
        res.json(space);
    }).catch(function(err){
        res.json(err);
    });
}); 

router.put('/space/update/:spaceId', function(req, res, next) {
    models.Space.find({
      where: {
        id: req.params.spaceId
      }
    }).then(function(space){
      space.updateAttributes({
        name: req.body.name,
        type: req.body.type,
        googlePlaceId: req.body.googlePlaceId,
        owner: req.body.owner,
        contactFirstName: req.body.contactFirstName,
        contactLastName: req.body.contactLastName,
        contactCellNumber: req.body.contactCellNumber,
        contactEmail: req.body.contactEmail,
        occupancy: req.body.occupancy
      }).then(function(space){
          res.json(space);
      }).catch(function(err){
          res.json(err);
      });
    });
}); 


router.get('/space/:spaceId', function(req, res) {
    models.Space.find({
        where: {
            id: req.params.spaceId 
        }
    }).then(function(space){
        res.json(space);
    }).catch(function(err){
        res.json(err);
    });
});

router.get('/spaces', function(req, res) {
    models.Space.findAll({})
    .then(function(spaces){
        res.json(spaces);
    }).catch(function(err){
        res.json(err);
    });
});

router.get('/space/:spaceId/events', function(req, res) {
    models.Event.findAll({
        where: {
            SpaceId: req.params.spaceId 
        }
    }).then(function(events){
        res.json(events);
    }).catch(function(err){
        res.json(err);
    });
});

router.delete('/space/delete/:spaceId', function(req, res) {
    models.Space.destroy({
        where: {
            id: req.params.spaceId 
        }
    }).then(function(space){
        res.json({msg: "Space deleted."});
    }).catch(function(err) {
        res.json(err);
    });
});





module.exports = router;
