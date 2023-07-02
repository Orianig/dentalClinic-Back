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
        type: Sequelize.DATEONLY, //
        allowNull: false,
      },
      startTime: {
        type: Sequelize.TIME, //
        allowNull: false,
      },
      endTime: {
        type: Sequelize.TIME, //
        allowNull: false,
      },
      interventionId: {
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