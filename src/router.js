const express = require("express");

const mainRouter = express.Router();

const appRouter = require("./routes/routes");

mainRouter.use("/api", appRouter);
mainRouter.get("/healthcheck", () => console.log("Healthcheck Success"));

module.exports = mainRouter;
