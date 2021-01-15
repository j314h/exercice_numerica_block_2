const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const userSchema = Schema(
  {
    firstName: String,
    lastName: String,
    email: { type: String, required: true, unique: true },
    password: String,
    role: { type: String, default: "root" },
  },
  {
    timestamps: true,
  }
);

//hash password
userSchema.statics.hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(15);
    return bcrypt.hash(password, salt);
  } catch (error) {
    throw error;
  }
};

//compare hash password
userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Users = mongoose.model("users", userSchema);

module.exports = Users;
