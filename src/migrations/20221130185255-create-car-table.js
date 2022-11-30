'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('Cars', {
      id: { primaryKey: true, autoIncrement: true, type: Sequelize.INTEGER, },
      car: Sequelize.STRING,
    });
  },

  async down (queryInterface, _Sequelize) {
    return queryInterface.dropTable('Cars');
  }
};
