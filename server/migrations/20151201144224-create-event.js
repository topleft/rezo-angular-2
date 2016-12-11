'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: { 
        type: Sequelize.DATE,
        required: true
      },
      time: { 
        type: Sequelize.STRING,
        required: true
      },
      totalGuests: { 
        type: Sequelize.INTEGER,
        required: true
      },
      cost: { 
        type: Sequelize.FLOAT
      },
      specialRequests: { 
        type: Sequelize.STRING
      },
      inviteList: { 
        type: Sequelize.STRING
      },
      barTab: { 
        type: Sequelize.FLOAT,
        required: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Events');
  }
};