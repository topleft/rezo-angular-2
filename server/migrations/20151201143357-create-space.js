'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Spaces', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: { 
        type: Sequelize.STRING,
        required: true,
        allowNull: false
      },
      type: { 
        type: Sequelize.STRING,
      },
      googlePlaceID: { 
        type: Sequelize.STRING,
      },
      contactFirstName: { 
        type: Sequelize.STRING,
        required: true,
        allowNull: false
      },
      contactLastName: { 
        type: Sequelize.STRING,
        required: true,
        allowNull: false
      },
      contactCellNumber: { 
        type: Sequelize.STRING,
        required: true,
        allowNull: false
      },
      contactEmail: { 
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
        validate: {
          isEmail: true
        } 
      },
      occupancy: { 
        type: Sequelize.INTEGER,
        required: true,
        allowNull: false 
      },
      logoUrl: { 
        type: Sequelize.STRING,
        required: true,
        allowNull: false 
      },
      websiteUrl: { 
        type: Sequelize.STRING,
        required: true,
        allowNull: false 
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
    return queryInterface.dropTable('Spaces');
  }
};