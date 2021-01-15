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
        { _id: req.body.id },
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
