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
        date:'2023-06-07',
        startTime: '09:00:00',
        endTime: '10:00:00',
        interventionId: 2,
        details:'intervencion bucal sin cirugia',
        patientId: 5,
        dentistId: 3,
        results:'se ha extraido la muela'
      },
      {
        id:2,
        date:'2023-07-07',
        startTime: '10:00:00',
        endTime: '11:00:00',
        interventionId: 4,
        details: 'revision de dientes',
        patientId:6,
        dentistId: 4,
        results: 'tiene 5 caries'
      },
      {
        id:3,
        date:'2023-08-05',
        startTime: '13:00:00',
        endTime: '14:00:00',
        interventionId: 2,
        details:'intervencion bucal sin cirugia',
        patientId: 5,
        dentistId: 3,
        results:'se ha extraido la muela'
      },
      {
        id:4,
        date:'2023-09-02',
        startTime: '11:00:00',
        endTime: '12:00:00',
        interventionId: 4,
        details: 'revision dientes',
        patientId:6,
        dentistId: 4,
        results: 'tiene 6 caries'
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
