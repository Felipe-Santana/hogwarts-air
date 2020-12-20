const Router = require("@koa/router");
const flightController = require("../controllers/flightController");

const flightRoutes = new Router({ prefix: "/flights" });

flightRoutes.post("create-flight", "/", flightController.create);

flightRoutes.get("list-all-flights", "/", flightController.list);

flightRoutes.get("get-flight-by-id", "/:id", flightController.get);

module.exports = flightRoutes;
