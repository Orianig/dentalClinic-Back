'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Specialities', [
      {
        id: 1,
        name: 'General',
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        id: 2,
        name: 'Ortodoncia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        id: 3,
        name: 'Endodoncia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: 'Periodoncia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        id: 5,
        name: 'Odontopediatría',
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        id: 6,
        name: 'Implantología dental',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
      },

      async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
      }
};
