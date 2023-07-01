'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Appointments', [
      {
        id:1,
        date:'2023-06-07T14:30:00',
        interventionId: 2,
        details:'intervencion bucal sin cirugia',
        patientId: 5,
        dentistId: 3,
        results:'se ha extraido la muela'
      },
      {
        id:2,
        date: '2023-06-28T16:30:00',
        interventionId: 4,
        details: 'revision de dientes',
        patientId:6,
        dentistId: 4,
        results: 'tiene 5 caries'
      },
    ]);
  },
  
  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
