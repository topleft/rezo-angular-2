'use strict';
module.exports = function(sequelize, DataTypes) {
  var Menu = sequelize.define('Menu', {
    name: {
      type:DataTypes.STRING,      
    },
    bevItems: { 
      type:DataTypes.ARRAY(DataTypes.TEXT),
    },
    foodItems: {
      type:DataTypes.ARRAY(DataTypes.TEXT),
    },
    costPerPerson: { 
      type:DataTypes.FLOAT,
      required: true
    },
    imageUrl: {
        type: DataTypes.STRING,
    }
  }, {
    classMethods: {
      associate: function(models) {
        Menu.belongsTo(models.Space, {
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return Menu;
};