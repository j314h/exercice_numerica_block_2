const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const competenceSchema = Schema(
  {
    title: String,
    text: String,
    imgs: { type: Array, default: [] },
  },
  {
    timestamps: true,
  }
);

const Competences = mongoose.model("competences", competenceSchema);

module.exports = Competences;
