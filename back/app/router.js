const router = require("express").Router();
const authController = require("./controllers/authController");
const profilController = require("./controllers/profilController");
const competenceController = require("./controllers/competenceController");
const uploadController = require("./controllers/uploadController");
//multer for off multer
const multer = require("multer");
const noMulter = multer().none();
//middleware multer
const { upload, uploadFileCompetence } = require("./middlewares/multer");

//middleware verify acces administrateur
const { verifUserConnect, verifUserAccesRoot } = require("./middlewares/verifyAccess.conf");

// => user
//create user
router.post("/connexion", noMulter, authController.signIn);
//connexion user
router.post("/create-user", authController.signUp);
//logout user with check user connected else send error
router.get("/logout", verifUserConnect, authController.logOut);
router.get("/user", verifUserConnect, authController.getUserConnected);

// => profil
//update info profil verifUserConnect, verifUserAccesRoot,
router.post("/update-profil", noMulter, profilController.updateInfoProfil);
//get all info profil
router.get("/info-profil", profilController.getAllInfoProfil);

// => competence
//create competence
router.post("/create-competence", verifUserConnect, verifUserAccesRoot, competenceController.createCompetence);
//update competence
router.post(
  "/update-competence",
  noMulter,
  verifUserConnect,
  verifUserAccesRoot,
  competenceController.updateCompetence
);
//add or update img competence
router.post(
  "/imgs-competence",
  verifUserConnect,
  verifUserAccesRoot,
  uploadFileCompetence.single("imgCompetence"),
  competenceController.updateImgCompetence
);
router.post("/delete-imgs", noMulter, verifUserConnect, verifUserAccesRoot, competenceController.deleteImgCompetence);
//delete competence
router.get("/delete-competence/:id", verifUserConnect, verifUserAccesRoot, competenceController.deleteCompetence);
//get all competence
router.get("/competences", competenceController.getAllCompetences);

// => file
//get all image
router.get("/files", uploadController.getAllImg);
//upload image profil
router.post(
  "/file/profil",
  verifUserConnect,
  verifUserAccesRoot,
  upload.single("profil"),
  uploadController.uploadProfil
);
//upload cv
router.post("/file/cv", verifUserConnect, verifUserAccesRoot, upload.single("cv"), uploadController.uploadCv);

module.exports = router;
