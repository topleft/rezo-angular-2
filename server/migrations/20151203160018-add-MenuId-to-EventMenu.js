'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'EventMenus',
      'MenuId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: "Menus",
          key: "id"
        }
      });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'EventMenus',
      'MenuId');
  }
};