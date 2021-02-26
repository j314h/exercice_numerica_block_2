const { Users } = require("../models");

//request create user with save() and create object instance for Users
exports.createUser = async (req) => {
  try {
    //create hash password
    const password = await Users.hashPassword(req.body.password);
    //create user instance
    const newUser = new Users({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: password,
    });
    //mongoose detects duplicates on its own and returns an error
    newUser.save();
  } catch (error) {
    throw error;
  }
};
