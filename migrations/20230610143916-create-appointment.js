'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE, //'2023-06-07T14:30:00'
        allowNull: false,
      },
      interventionTypeId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Interventions",
          key: "id"
        },
        allowNull: false,
      },
      details: {
        type: Sequelize.STRING
      },
      patientId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
          where: {
            roleId: 3
          }
        },
        allowNull: false,
        unique: true
      },
      dentistId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
          where: {
            roleId: 2
          }
        },
        allowNull: false,
        unique: true
      },
      results: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Appointments');
  }
};