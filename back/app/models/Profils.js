const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profilSchema = Schema(
  {
    textPrincipal: String,
    textSecondaire: String,
    textConclusion: String,
  },
  {
    timestamps: true,
  }
);

const Profils = mongoose.model("profils", profilSchema);

module.exports = Profils;
