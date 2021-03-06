const mongoose = require("mongoose");

//option for mongoose
const optionConnect = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

//connect database
const connexion = async () => {
  try {
    const db = await mongoose.connect(process.env.URLBDD, optionConnect);
    db ? console.log("Connexion BDD Portfolio OK") : console.log("Error connect BDD Portfolio");
  } catch (e) {
    console.log(e.message);
  }
};

connexion();
