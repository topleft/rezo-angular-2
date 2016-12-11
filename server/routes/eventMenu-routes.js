var express = require('express');
var router = express.Router();
var models = require('../models/index');

console.log(models.EventMenu)


router.post('/eventmenu/create', function(req, res, next) {
    models.EventMenu.create({
      quantity: req.body.qauntity,
      EventId: req.body.eventId,
      MenuId: req.body.menuId
    }).then(function(table){
        res.json(table);
    }).catch(function(err){
        res.json(err);
    });
}); 



module.exports = router;