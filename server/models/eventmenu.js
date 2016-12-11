'use strict';
module.exports = function(sequelize, DataTypes) {
  var EventMenu = sequelize.define('EventMenu', {
    quantity: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        models.Event.belongsToMany( models.Menu, { through: EventMenu,  unique: false });
        models.Menu.belongsToMany( models.Event, { through: EventMenu, unique: false });
      }
    }
  });
  return EventMenu;
};