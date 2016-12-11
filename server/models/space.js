'use strict';
module.exports = function(sequelize, DataTypes) {
  var Space = sequelize.define('Space', {
    name: { 
      type: DataTypes.STRING,
      required: true,
      allowNull: false
    },
    type: { 
      type: DataTypes.STRING,
    },
    googlePlaceID: { 
      type: DataTypes.STRING,
    },
    contactFirstName: { 
      type: DataTypes.STRING,
      required: true,
      allowNull: false
    },
    contactLastName: { 
      type: DataTypes.STRING,
      required: true,
      allowNull: false
    },
    contactCellNumber: { 
      type: DataTypes.STRING,
      required: true,
      allowNull: false
    },
    contactEmail: { 
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
      validate: {
        isEmail: true
      } 
    },
    occupancy: { 
      type: DataTypes.INTEGER,
      required: true,
      allowNull: false 
    },
    logoUrl: { 
      type: DataTypes.STRING,
      required: true,
      allowNull: false 
    },
    websiteUrl: { 
      type: DataTypes.STRING,
      required: true,
      allowNull: false 
    }
  }, {
    classMethods: {
      associate: function(models) {
        Space.hasMany(models.Menu);
      }
    }
  });
  return Space;
};