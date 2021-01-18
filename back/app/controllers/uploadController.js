const { Files } = require("../models");
const { changeOrCreateValueForFile } = require("../queries/global.queries");

const uploadController = {
  uploadProfil: async (req, res, next) => {
    try {
      //update or create file
      const fileUpdate = await changeOrCreateValueForFile(req);
      console.log("Create or update logo profil is ok");
      res.status(200).json(fileUpdate);
    } catch (e) {
      req.errorMessage = "Update or create field image error";
      next(e);
    }
  },

  uploadCv: async (req, res, next) => {
    try {
      //update or create file
      const fileUpdate = await changeOrCreateValueForFile(req);
      console.log("Create or update logo profil is ok");
    } catch (e) {
      req.errorMessage = "Update or create field image error";
      next(e);
    }
  },

  getAllImg: async (req, res, next) => {
    try {
      const imgs = await Files.find();
      res.status(200).json(imgs);
    } catch (e) {
      req.errorMessage = "Update or create field image error";
      next(e);
    }
  },
};

module.exports = uploadController;
