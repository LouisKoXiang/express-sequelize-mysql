'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users', 'phone', {
      type: 'integer'
    });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn('Users','phone');
    }
  }