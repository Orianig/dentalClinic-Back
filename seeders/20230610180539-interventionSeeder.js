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
    return queryInterface.bulkInsert('Interventions', [
      {
        id:1,
        name: 'Chequeo general',
        price: 50,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:2,
        name: 'Limpieza bucal',
        price: 60,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:3,
        name: 'Empaste',
        price: 70,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:4,
        name: 'Exodoncia (extraccion dental)',
        price: 50,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:5,
        name: 'Ortodoncia',
        price: 1500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:6,
        name: 'Implantologia dental',
        price: 2000,
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
