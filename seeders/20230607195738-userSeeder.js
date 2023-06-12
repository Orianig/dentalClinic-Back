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
        name: 'Oriana',
        lastName: 'Infante',
        email: 'oriana@example.com',
        password: 'password1',
        dni: '637825672',
        phoneNumber: '1234567890',
        gender: 'mujer',
        birthdate: '1960-05-15',
        specialityId: null ,
        collegiateNumber:null,
        roleId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'Jane',
        lastName: 'Smith',
        email: 'jane@example.com',
        password: 'password2',
        dni: '982347629',
        phoneNumber: '9876543210',
        gender: 'mujer',
        birthdate: '1992-09-25',
        specialityId: null,
        collegiateNumber: null,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: 'David',
        lastName: 'Johnson',
        email: 'david.johnson@example.com',
        password: 'password3',
        dni: '738291827',
        phoneNumber: '5551234567',
        gender: 'hombre',
        birthdate: '1985-07-10',
        specialityId: null,
        collegiateNumber: null,
        roleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: 'Emily',
        lastName: 'Davis',
        email: 'emily.davis@example.com',
        password: 'password4',
        dni: '345672983',
        phoneNumber: '7894561230',
        gender: 'mujer',
        birthdate: '1998-02-18',
        specialityId: 2,
        collegiateNumber: '456789123',
        roleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        name: 'Michael',
        lastName: 'Wilson',
        email: 'michael.wilson@example.com',
        password: 'password5',
        dni: '564738291',
        phoneNumber: '6547891230',
        gender: 'hombre',
        birthdate: '1982-11-07',
        specialityId: 1,
        collegiateNumber: '987654321',
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        name: 'Carlos',
        lastName: 'Torres',
        email: 'carlos.perez@example.com',
        password: 'password7',
        dni: '789345672',
        phoneNumber: '123456789',
        gender: 'hombre',
        birthdate: '1979-04-12',
        specialityId: null,
        collegiateNumber: null,
        roleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        name: 'Sophia',
        lastName: 'Lee',
        email: 'sophia.lee@example.com',
        password: 'password8',
        dni: '234567890',
        phoneNumber: '5555555555',
        gender: 'mujer',
        birthdate: '1996-12-01',
        specialityId: 1,
        collegiateNumber: '345678901',
        roleId: 2,
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
