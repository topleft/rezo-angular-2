var express = require('express');
var router = express.Router();
var models = require('../models/index');


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/menu/create', function(req, res, next) {
    models.Menu.create({
        name: req.body.name,
        SpaceId: req.body.SpaceId,
        bevItems: req.body.bevItems,
        foodItems: req.body.foodItems,
        costPerPerson: req.body.costPerPerson,
    }).then(function(menu){
        res.json(menu);
    }).catch(function(err){
        res.json(err);
    });
}); 

router.put('/menu/update/:menuId', function(req, res, next) {
    models.Menu.find({
      where: {
        id: parseInt(req.params.menuId)
      }
    }).then(function(menu){
      menu.updateAttributes({
          name: req.body.name,
          spaceId: req.body.spaceId,
          bevItems: req.body.bevItems,
          foodItems: req.body.foodItems,
          costPerPerson: req.body.costPerPerson,
      }).then(function(menu){
          res.json(menu);
      }).catch(function(err){
          res.json(err);
      });
    });
}); 


router.get('/menu/:menuId', function(req, res) {
    models.Menu.find({
        where: {
            id: req.params.menuId 
        }
    }).then(function(menu){
        res.json(menu);
    }).catch(function(err){
        res.json(err);
    });
});

router.get('/menus/space/:spaceId', function(req, res) {
    models.Menu.findAll({
        where: {
            SpaceId: req.params.spaceId 
        }
    }).then(function(spaces){
        res.json(spaces);
    }).catch(function(err){
        res.json(err);
    });
});


router.delete('/menu/delete/:menuId', function(req, res) {
    models.Menu.destroy({
        where: {
            id: parseInt(req.params.menuId)
        }
    }).then(function(menu){
        res.json({msg: "Menu deleted."});
    }).catch(function(err) {
        res.json(err);
    });
});



module.exports = router;
