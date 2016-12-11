( function () {

  'usestrict';

var server = require("../app");
var models = require('../models/index');
var TwistedPine;
var lunchMenu;
var dinnerMenu;

//------- CREATE SPACE -----//
  models.Space.sync({
    force: true
    }).then(function() {
        models.Space.create({
            name: 'TwistedPine',
            type: 'Restaurant/Bar',
            googlePlaceID: 'ChIJf-xTgMR4bIcRcnPIy94BeIw',
            owner: null,
            contactFirstName: "Pete" ,
            contactLastName: "Jeffryes",
            contactCellNumber: "5102891955",
            contactEmail: "pete.topleft@gmail.com",
            occupancy: 60,
            websiteUrl: "http://www.labbrewingco.com/",
            logoUrl: "http://www.labbrewingco.com/images/Twisted-Oak-Logo-Black.jpg",
            }).then(function(space){
                console.log("Space: ", space.dataValues);
                TwistedPine = space.dataValues;
                console.log('_____________________________________________________________');
                models.Menu.sync(
                  {force: true
                  }).then(function() {
                      models.Menu.create({
                          name: "Bangers & Mash",
                          bevItems: ['Beer', 'Soda', 'Water'],
                          foodItems: ['Bangers & Mash', 'Scotch Egg', 'Grapefruit Fennel Salad', 'Bread Pudding'],
                          costPerPerson: 22.00,
                          SpaceId: TwistedPine.id,
                          imageUrl: 'http://www.taste.com.au/images/recipes/agt/2009/04/22212_l.jpg'
                      }).then(function(menu){
                          lunchMenu = menu.dataValues;
                          console.log('_____________________________________________________________');
                          console.log('\n');
                          models.Menu.create({
                              name: 'Vegetable Curry',
                              bevItems: ['Beer', 'Wine', 'Sparkling Water'],
                              foodItems: ['Curry with Naan', 'Dahl', 'Papaya Salad', 'Veagn Apple Pie'],
                              costPerPerson: 18.00,
                              SpaceId: TwistedPine.id,
                              imageUrl: 'http://www.lotusartichoke.com/wp-content/uploads/2012/08/mutterpaneertofu_7094w_700.jpg'
                          }).then(function(menu){
                              dinnerMenu = menu.dataValues;
                              models.Event.sync({force: true}).then(function () {
                                models.Event.create({
                                SpaceId: TwistedPine.id,
                                UserId: null,
                                date: new Date(), 
                                time: "10:00pm", 
                                totalGuests: 0, 
                                cost: 0, 
                                specialRequests: null, 
                                inviteList: null, 
                                barTab: 0
                              }).catch(function(err) {
                                  console.log(err);
                              });
                            });
                          }).catch(function(err) {
                              console.log(err);
                          });
                      }).catch(function(err) {
                          console.log(err);
                      });
                  });
            }).catch(function(err) {
                console.log(err);
            });
      });




})();             