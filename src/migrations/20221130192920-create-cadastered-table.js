'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('Cadastered', {
      id: { primaryKey: true, type: Sequelize.INTEGER, autoIncrement:  true },
      name: Sequelize.STRING,
      password: Sequelize.STRING,
    })
  },

  async down (queryInterface, _Sequelize) {
    return queryInterface.dropTable('Cadastered');
  }
};
