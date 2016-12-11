'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'EventMenus',
      'EventId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: "Events",
          key: "id"
        }
      });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'EventMenus',
      'EventId');
  }
};
