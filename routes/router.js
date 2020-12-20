const Router = require("@koa/router");
const router = new Router();
const flightRoutes = require("./flightRoutes");

router.use(flightRoutes.routes(), flightRoutes.allowedMethods());

module.exports = router;
