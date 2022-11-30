'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('Users', {
      id: { primaryKey: true, autoIncrement: true, type: Sequelize.INTEGER, },
      name: Sequelize.STRING,
    });
  },

  async down (queryInterface, _Sequelize) {
    return queryInterface.dropTable('Users');
  }
};
