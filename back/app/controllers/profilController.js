const { Profils } = require("../models");

const profilController = {
  //update info user profil page
  updateInfoProfil: async (req, res, next) => {
    try {
      //if exist this recover automatic error
      //update info profil with id
      const newInfoProfil = await Profils.findByIdAndUpdate(
        { _id: req.body._id },
        {
          textPrincipal: req.body.textPrincipal,
          textSecondaire: req.body.textSecondaire,
          textConclusion: req.body.textConclusion,
        },
        { useFindAndModify: false, new: true }
      );
      res.status(200).json(newInfoProfil);
    } catch (e) {
      req.errorMessage = "Error update info profil page";
      next(e);
    }
  },

  //get all info profil
  getAllInfoProfil: async (req, res, next) => {
    try {
      //get all info profil
      const allInfoProfil = await Profils.find();
      //if error throw new error
      if (!allInfoProfil) throw new Error("Info profil not found");
      res.status(200).json(allInfoProfil);
    } catch (e) {
      req.errorMessage = "Error get all info profil";
      next(e);
    }
  },
};

module.exports = profilController;
