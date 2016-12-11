'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
      validate: {
        isEmail: true
      } 
    },
    googleProfileID: {
      type: DataTypes.STRING
    },
    phoneNumber: {
      type: DataTypes.STRING
    },
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    companyName: {
      type: DataTypes.STRING
    }
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Event);
      }
    }
  });
  
  return User;
};