const { Competences } = require("../models");
const { createCompetence } = require("../queries/global.queries");

const competenceController = {
  //get all competences
  getAllCompetences: async (req, res, next) => {
    try {
      const competences = await Competences.find();
      //if error throw error
      if (!competences) throw new Error("All competences not found");
      res.status(200).json(competences);
    } catch (e) {
      req.errorMessage = "Error get all competence";
      next(e);
    }
  },

  //create competence
  createCompetence: async (req, res, next) => {
    try {
      //create competence function in querie globals
      const competence = await createCompetence(req);
      //if error throw error
      if (!competence) throw new Error("An error has occurred create competence ");
      //after get all competences for update front
      const competences = await Competences.find();
      res.status(200).json(competences);
    } catch (e) {
      req.errorMessage = "Error create competence";
      next(e);
    }
  },

  //update competence
  updateCompetence: async (req, res, next) => {
    try {
      //update competence
      const competence = await Competences.findByIdAndUpdate(
        { _id: req.body._id },
        {
          title: req.body.title,
          text: req.body.text,
          imgs: req.body.imgs,
        },
        { useFindAndModify: false, new: true }
      );
      if (!competence) throw new Error("Update competence error");
      //recover all competences for update front
      const competences = await Competences.find();
      //if error throw error
      if (!competences) throw new Error('"An error has occurred update competence"');
      res.status(200).json(competences);
    } catch (e) {
      req.errorMessage = "Error update competence";
      next(e);
    }
  },

  //delete image in competence data base
  deleteImgCompetence: async (req, res, next) => {
    try {
      const competence = await Competences.findById({ _id: req.body.id });
      const newCompetenceImg = competence.imgs.filter((el) => el !== req.body.imgs);
      console.log("deleteImgCompetence: ~ newCompetence", newCompetenceImg);
      await Competences.findByIdAndUpdate(
        { _id: req.body.id },
        { imgs: newCompetenceImg },
        { useFindAndModify: false, new: true }
      );
      //recover all competences for update front
      const competences = await Competences.find();
      //if error throw error
      if (!competences) throw new Error('"An error has occurred update competence"');
      res.status(200).json(competences);
      res.end();
    } catch (e) {
      req.errorMessage = "Error delete img competence";
      next(e);
    }
  },

  //add or update img in tab imgs in competence target with id competence
  updateImgCompetence: async (req, res, next) => {
    try {
      console.log(req);
      console.log(req.body.id);
      console.log(req.file);
      const competence = await Competences.findByIdAndUpdate(
        { _id: req.body.id },
        { $push: { imgs: req.file.filename } },
        { useFindAndModify: false, new: true }
      );
      const competences = await Competences.find();
      //if error throw error
      if (!competences) throw new Error("All competences not found");
      res.status(200).json(competences);
      res.end();
    } catch (e) {
      req.errorMessage = "Error update img competence";
      next(e);
    }
  },

  //delete competence
  deleteCompetence: async (req, res, next) => {
    try {
      //delete competence
      await Competences.deleteOne({ _id: req.params.id });
      //recover all competence for update front
      const competences = await Competences.find();
      //if error throw error
      if (!competences) throw new Error("An error has occurred delete competence");
      res.status(200).json(competences);
    } catch (e) {
      req.errorMessage = "Error delete competence";
      next(e);
    }
  },
};

module.exports = competenceController;
