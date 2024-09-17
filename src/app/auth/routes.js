const express = require("express");

const authRouter = express.Router();

authRouter.all("*", authInterfaceMiddleware);

authRouter.post("/signup", signup);
authRouter.post("/recover-password", recover);
authRouter.post("/reset-password", reset);

module.exports = authRouter;
