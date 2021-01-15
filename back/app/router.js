const router = require("express").Router();
const authController = require("./controllers/authController");
const profilController = require("./controllers/profilController");
const competenceController = require("./controllers/competenceController");

//middleware verify acces administrateur
const { verifUserConnect, verifUserAccesRoot } = require("./middlewares/verifyAccess.conf");

// => user
//create user
router.post("/connexion", authController.signIn);
//connexion user
router.post("/create-user", authController.signUp);
//logout user with check user connected else send error
router.get("/logout", verifUserConnect, authController.logOut);

// => profil
//update info profil
router.post("/update-profil", verifUserConnect, verifUserAccesRoot, profilController.updateInfoProfil);
//get all info profil
router.get("/info-profil", profilController.getAllInfoProfil);

// => competence
//create competence
router.post("/create-competence", verifUserConnect, verifUserAccesRoot, competenceController.createCompetence);
//update competence
router.post("/update-competence", verifUserConnect, verifUserAccesRoot, competenceController.updateCompetence);
//delete competence
router.get("/delete-competence/:id", verifUserConnect, verifUserAccesRoot, competenceController.deleteCompetence);
//get all competence
router.get("/competences", competenceController.getAllCompetences);

module.exports = router;
