const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const dotenv = require("dotenv");

const routes = require("./router");

const createApp = () => {
  const app = express();

  dotenv.config();

  app.use(helmet());

  app.use(cors());

  app.use(xss());

  app.use("/", routes);
};

const app = createApp();

module.exports = app;
