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
    return queryInterface.bulkInsert('Users', [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        password: 'password1',
        phoneNumber: '1234567890',
        role_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane.smith@example.com',
        password: 'password2',
        phoneNumber: '9876543210',
        role_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        firstName: 'David',
        lastName: 'Johnson',
        email: 'david.johnson@example.com',
        password: 'password3',
        phoneNumber: '5551234567',
        role_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        firstName: 'Emily',
        lastName: 'Davis',
        email: 'emily.davis@example.com',
        password: 'password4',
        phoneNumber: '7894561230',
        role_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        firstName: 'Michael',
        lastName: 'Wilson',
        email: 'michael.wilson@example.com',
        password: 'password5',
        phoneNumber: '6547891230',
        role_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        firstName: 'Laura',
        lastName: 'Rodriguez',
        email: 'laura.garcia@example.com',
        password: 'password6',
        phoneNumber: '987654321',
        role_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        firstName: 'Carlos',
        lastName: 'Torres',
        email: 'carlos.perez@example.com',
        password: 'password7',
        phoneNumber: '123456789',
        role_id: 2,
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
