"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Flight.init(
    {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      scheduleArrivalTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      scheduleDepartureTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      originAirport: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      destinationAirport: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gate: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Flight",
    }
  );
  return Flight;
};
