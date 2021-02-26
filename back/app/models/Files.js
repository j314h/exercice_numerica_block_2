const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fileSchema = Schema(
  {
    name: String,
    src: String,
    fieldName: String,
    idCompetence: { type: Schema.Types.ObjectId, autopopulate: true, ref: "competences" },
  },
  {
    timestamps: true,
  }
);

//see data for data ref in shemas
fileSchema.plugin(require("mongoose-autopopulate"));

const Files = mongoose.model("imgs", fileSchema);

module.exports = Files;
