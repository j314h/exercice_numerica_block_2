const { createUser } = require("../queries/user.queries");
const { Users } = require("../models");

const authController = {
  //deconnect user
  logOut: async (req, res, next) => {
    try {
      //delete jwt
      req.logout();
      //send response good and state connexion
      console.log("logout is ok");
      res.status(200).json({ connexion: false });
    } catch (e) {
      req.errorMessage = "Error logout user";
      next(e);
    }
  },

  //create user
  signUp: async (req, res, next) => {
    try {
      await createUser(req);
      //update if others user use this app
      console.log("create user ok");
      res.end();
    } catch (e) {
      req.errorMessage = "Error create user";
      next(e);
    }
  },

  //connexion user
  signIn: async (req, res, next) => {
    try {
      //recover user connect
      const user = await Users.findOne({ email: req.body.email });
      if (!user) throw new Error("User not found");
      //compare password body with password in database
      const response = await user.comparePassword(req.body.password);
      if (!response) throw new Error("Password not found");
      const newUser = {
        role: user.role,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      };
      req.login(user);
      res.status(200).json(newUser);
    } catch (e) {
      req.errorMessage = "Error connexion user";
      next(e);
    }
  },

  //getuserconnected
  getUserConnected: async (req, res, next) => {
    try {
      const user = await Users.findById({ _id: req.user._id });
      if (!user) throw new Error("User is not found");
      const newUser = {
        role: user.role,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      };
      req.login(user);
      res.status(200).json(newUser);
    } catch (e) {
      req.errorMessage = "Error verified connexion user";
      next(e);
    }
  },
};

module.exports = authController;
