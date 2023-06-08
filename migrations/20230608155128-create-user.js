'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(15)
      },
      lastName: {
        type: Sequelize.STRING(20)
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(30)
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      dni: {
        allowNull: false,
        type: Sequelize.STRING(15)
      },
      phoneNumber: {
        allowNull: false,
        type: Sequelize.STRING(15)
      },
      gender: {
        type: Sequelize.ENUM('hombre', 'mujer'),
      },
      birthdate: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      specialityId: {
        type: Sequelize.INTEGER,
        references:{
          model: "Specialities",
          key: "id"
        }
      },
      collegiateNumber: {
        type: Sequelize.STRING
      },
      roleId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model: "Roles",
          key: "id"
        }
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};