const prisma = require("@prisma/client");
const AuthInterface = require("./interface");
const signupSchema = require("./schema");

const authInterfaceMiddleware = (req, res, next) => {
  try {
    const db = prisma.user;
    req.repo = new AuthInterface(db);
    return next();
  } catch (error) {
    return next("Unable to connect to db");
  }
};

const signupVerification = async (req, res, next) => {
  try {
    await signupSchema.validate(req.body, { abortEarly: false });
  } catch (error) {
    return next("Unable to verify signup");
  }
};

module.exports = {
  authInterfaceMiddleware,
  signupVerification,
};
