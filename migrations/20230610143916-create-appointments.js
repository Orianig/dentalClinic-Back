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
        type: Sequelize.DATE
      },
      interventionTypeId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Interventions",
          key: "id"
        }
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
        }
      },
      dentistId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
          where: {
            roleId: 2
          }
        }
      },
      results: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Appointments');
  }
};