'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    return queryInterface.bulkInsert('Users', [
      { name: 'Cristiano Ronaldo' },
      { name: 'Lionel Messi' },
      { name: 'Neymar Júnior' },
      { name: 'Kevin De Bruyne' },
      { name: 'Vinícius Júnior' },
    ])
  },

  async down (queryInterface, _Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
