'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *20230607195738
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const bcrypt = require('bcrypt');
    
    return queryInterface.bulkInsert('Users', [
      {
        id: 1,
        name: 'admin',
        lastName: 'admin',
        email: 'admin@example.com',
        password: bcrypt.hashSync('Password1', 8),
        dni: '111111',
        phoneNumber: '111111111',
        gender: 'hombre',
        birthdate: '1960-05-15',
        specialityId: null ,
        collegiateNumber:null,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'superAdmin',
        lastName: 'superAdmin',
        email: 'superAdmin@example.com',
        password: bcrypt.hashSync('Password1', 8),
        dni: '666666',
        phoneNumber: '666666666',
        gender: 'mujer',
        birthdate: '1960-05-15',
        specialityId: null ,
        collegiateNumber:null,
        roleId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: 'dentist1',
        lastName: 'dentist1',
        email: 'dentist1@example.com',
        password: bcrypt.hashSync('Password1', 8),
        dni: '222222',
        phoneNumber: '222222222',
        gender: 'mujer',
        birthdate: '1960-05-15',
        specialityId: 1 ,
        collegiateNumber:'222222222',
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: 'dentist2',
        lastName: 'dentist2',
        email: 'dentist2@example.com',
        password: bcrypt.hashSync('Password1', 8),
        dni: '444444',
        phoneNumber: '444444444',
        gender: 'hombre',
        birthdate: '1960-05-15',
        specialityId: 4 ,
        collegiateNumber:'444444444',
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        name: 'user1',
        lastName: 'user1',
        email: 'user1@example.com',
        password: bcrypt.hashSync('Password1', 8),
        dni: '333333',
        phoneNumber: '333333333',
        gender: 'mujer',
        birthdate: '1960-05-15',
        specialityId: null ,
        collegiateNumber:null,
        roleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 6,
        name: 'user2',
        lastName: 'user2',
        email: 'user2@example.com',
        password: bcrypt.hashSync('Password1', 8),
        dni: '555555',
        phoneNumber: '555555555',
        gender: 'hombre',
        birthdate: '1960-05-15',
        specialityId: null ,
        collegiateNumber:null,
        roleId: 3,
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
