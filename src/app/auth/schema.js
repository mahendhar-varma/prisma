const yup = require("yup");

const signupSchema = yup.object({
  email: yup
    .string("Password must be string")
    .email("Entered Email is invalid")
    .max(50, "Email can't be more than 50 characters")
    .required("Email can't be empty"),

  password: yup
    .string("Password must be a string")
    .min(1, "Password is too short")
    .max(200, "Password can't be more than 200 characters")
    .required("Password ca'nt be empty"),
});

module.exports = signupSchema;
