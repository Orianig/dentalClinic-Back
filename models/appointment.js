'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Appointment.belongsTo(
        models.Intervention, {
        foreignKey: 'interventionId'
      }),
        Appointment.belongsTo(
          models.User, {
          foreignKey: 'patientId'
        });
        Appointment.belongsTo(
          models.User, {
          foreignKey: 'dentistId'
        });

    }
  }

  Appointment.init({
    date: DataTypes.DATE,
    interventionId: DataTypes.INTEGER,
    details: DataTypes.STRING,
    patientId: DataTypes.INTEGER,
    dentistId: DataTypes.INTEGER,
    results: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};