"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Flights", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      scheduleArrivalTime: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      scheduleDepartureTime: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      originAirport: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      destinationAirport: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      gate: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Flights");
  },
};
