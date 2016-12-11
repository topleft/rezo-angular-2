'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Events',
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
      'Events',
      'SpaceId');
  }
};