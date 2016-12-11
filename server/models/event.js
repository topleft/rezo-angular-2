'use strict';
module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define('Event', {
    date: { 
      type: DataTypes.DATE,
      required: true
    },
    time: { 
      type: DataTypes.STRING,
      required: true
    },
    totalGuests: { 
      type: DataTypes.INTEGER,
      required: true
    },
    cost: { 
      type: DataTypes.FLOAT
    },
    specialRequests: { 
      type: DataTypes.STRING
    },
    inviteList: { 
      type: DataTypes.STRING
    },
    barTab: { 
      type: DataTypes.FLOAT,
      required: true
    }
  }, {
    classMethods: {
      associate: function(models) {
        Event.belongsTo(models.User)
        Event.belongsTo(models.Space)
      }
    }
  });
  return Event;
};