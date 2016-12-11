(function(){


var server = require("../app");
var models = require('../models/index');
var RamenShop;


  models.Space.create({
    name: 'Ramen Shop',
    type: 'Restaurant',
    googlePlaceID: 'ChIJqz4ScsN9hYARA0aiLsuEmrA',
    owner: null,
    contactFirstName: "Pete" ,
    contactLastName: "Jeffryes",
    contactCellNumber: "5102891955",
    contactEmail: "pete.topleft@gmail.com",
    occupancy: 80,
    websiteUrl: "http://www.ramenshop.com/",
    logoUrl: "https://pbs.twimg.com/profile_images/2825870211/5c2e994c25fb347543f8fe5924657274_400x400.png",
    }).then(function(space){
        RamenShop = space.dataValues;
        console.log('_____________________________________________________________');
              models.Menu.create({
                  name: "Tsukemen",
                  bevItems: ['Beer', 'Soda', 'Water'],
                  foodItems: ['Tsukemen ramen', 'Donburi', 'Pickles', 'Mochi'],
                  costPerPerson: 30.00,
                  SpaceId: RamenShop.id,
                  imageUrl: 'http://cdn-image.foodandwine.com/sites/default/files/original-201310-HD-best-ramen-shops-ramen-shop.jpg'
              }).then(function(menu){
                  lunchMenu = menu.dataValues;
                  console.log('_____________________________________________________________');
                  console.log('\n');
                  models.Menu.create({
                    name: 'Tamarind Pork Ribs',
                    bevItems: ['Beer', 'Wine', 'Sparkling Water'],
                    foodItems: ['Tamarind Pork Ribs', 'Fried Rice', 'Chicory Salad', 'Walnut Torte'],
                    costPerPerson: 34.00,
                    SpaceId: RamenShop.id,
                    imageUrl: 'http://static01.nyt.com/images/2014/05/04/fashion/05OAKLAND1/05OAKLAND1-master315.jpg'
                }).then(function(menu){
                    dinnerMenu = menu.dataValues;
                      models.Event.create({
                      SpaceId: RamenShop.id,
                      UserId: null,
                      date: new Date(), 
                      time: "6:00pm", 
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
})();