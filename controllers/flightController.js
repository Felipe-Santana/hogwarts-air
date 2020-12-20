const { nanoid } = require("nanoid");
const db = require("../models/index");

const create = async (context) => {
  try {
    const body = context.request.body;

    const flight = await db.Flight.create({
      id: nanoid(),
      code: body.code,
      scheduleArrivalTime: body.scheduleArrivalTime,
      scheduleDepartureTime: body.scheduleDepartureTime,
      originAirport: body.originAirport,
      destinationAirport: body.destinationAirport,
      gate: body.gate,
    });

    context.body = flight;
    context.status = 200;
  } catch (error) {
    context.body = error;
    context.status = 400;
  }
};

const get = async (context) => {
  try {
    const id = context.params.id;
    const flight = await db.Flight.findByPk(id);

    if (flight === null) {
      context.status = 404;
      context.body = { message: `Flight not found by id ${id}` };
    } else {
      context.body = flight;
    }
  } catch (error) {
    context.status = 400;
    context.body = error;
  }
};

const list = async (context) => {
  try {
    const flights = await db.Flight.findAll();

    console.log(flights);

    context.body = flights;
  } catch (error) {
    context.status = 400;
    context.body = error;
  }
};

module.exports = { create, get, list };
