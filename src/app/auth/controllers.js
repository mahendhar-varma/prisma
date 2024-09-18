const AuthInterface = require("./interface");

const signupController = async (req, res) => {
  try {
    const userData = {
      firstname: req.body.first_name,
      lastname: req.body.last_name,
      password: req.body.password,
      email: req.body.email,
    };

    await req.repo.transaction(
      async (tx) => {
        let guestUser;
        if (req.headers.guestUserId) {
          guestUser = await new AuthInterface(tx.user).getSingle({
            id: req.headers.guestUserId,
          });
        }
        const getExistingUser = await new AuthInterface(tx.user).getSingle({
          email: userData.email,
        });

        if (getExistingUser) {
          await new AuthInterface(tx.user).updateSingle(
            {
              id: getExistingUser.id,
            },
            {
              user_id: userData.id,
            }
          );
        }

        const user = await new AuthInterface(tx.user).createSingle({
          name: `${userData.firstname} ${userData.lastname}`,
          email: userData.email.toLowerCase(),
          isAdmin: false,
        });
      },
      { timeout: 12 * 1000, maxWait: 10 * 1000 }
    );
    return {
      res,
      message: "Signup Succeful",
    };
  } catch (e) {
    return "Unable to signup a new user";
  }
};

module.exports = signupController;
