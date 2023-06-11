'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Intervention extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Intervention.hasOne(
        models.Appointment, {
        foreignKey: 'interventionId'
      });
      Intervention.belongsToMany(
        models.User,
        {
          through: 'Appointments',
          foreignKey: 'interventionId'
        })
    }
  }
  Intervention.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Intervention',
  });
  return Intervention;
};