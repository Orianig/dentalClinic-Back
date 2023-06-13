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
    const bcrypt = require('bcrypt');
    
    return queryInterface.bulkInsert('Users', [
      {
        id: 1,
        name: 'Oriana',
        lastName: 'Infante',
        email: 'oriana@example.com',
        password: bcrypt.hashSync('Password1', 8),
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
        name: 'Alejandra',
        lastName: 'Gonzalez',
        email: 'Alejandra@example.com',
        password: bcrypt.hashSync('Password2', 8),
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
        name: 'jane',
        lastName: 'torres',
        email: 'jane@example.com',
        password: bcrypt.hashSync('Password3', 8),
        dni: '6378252272',
        phoneNumber: '1234562290',
        gender: 'mujer',
        birthdate: '1960-05-15',
        specialityId: null ,
        collegiateNumber:null,
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: 'pepe',
        lastName: 'marques',
        email: 'pepe@example.com',
        password: bcrypt.hashSync('Password4', 8),
        dni: '637555672',
        phoneNumber: '1235567890',
        gender: 'hombre',
        birthdate: '1960-05-15',
        specialityId: null ,
        collegiateNumber:null,
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        name: 'pablo',
        lastName: 'marques',
        email: 'pablo@example.com',
        password: bcrypt.hashSync('Password1', 8),
        dni: '637888672',
        phoneNumber: '1234568890',
        gender: 'hombre',
        birthdate: '1960-05-15',
        specialityId: null ,
        collegiateNumber:null,
        roleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        name: 'carla',
        lastName: 'torres',
        email: 'carla@example.com',
        password: bcrypt.hashSync('Password1', 8),
        dni: '637877672',
        phoneNumber: '1234567790',
        gender: 'mujer',
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
