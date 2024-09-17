const express = require("express");

const auth = require("../app/auth");

const appRouter = express.Router();

appRouter.use("/auth", auth);

module.exports = appRouter;
