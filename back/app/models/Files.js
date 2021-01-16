const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fileSchema = Schema(
  {
    name: String,
    src: String,
    fieldName: String,
  },
  {
    timestamps: true,
  }
);

const Files = mongoose.model("imgs", fileSchema);

module.exports = Files;
