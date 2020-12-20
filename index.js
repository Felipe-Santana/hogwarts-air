const Koa = require("koa");
const logger = require("koa-logger");
const router = require("./routes/router");
const koaBody = require("koa-body");
const app = new Koa();

app.use(logger());

app.use(koaBody());

app.use(router.routes());

app.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});
