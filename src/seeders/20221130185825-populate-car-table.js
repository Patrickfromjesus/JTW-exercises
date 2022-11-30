'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    return queryInterface.bulkInsert('Cars', [
      { car: 'Bulgatti' },
      { car: 'Misseratti' },
      { car: 'Ferrari' },
      { car: 'Porshe' },
      { car: 'Rolls Royce' },
      { car: 'Tesla' },
    ]);
  },

  async down (queryInterface, _Sequelize) {
    return queryInterface.bulkDelete('Cars', null, {});
  }
};
