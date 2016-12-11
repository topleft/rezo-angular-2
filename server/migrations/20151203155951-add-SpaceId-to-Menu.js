'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Menus',
      'SpaceId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: "Spaces",
          key: "id"
        }
      });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'Menus',
      'SpaceId');
  }
};