require("../models/pet");
const mongoose = require("mongoose");
const Pet = mongoose.model("pet");

module.exports = {
  index: function(req, res) {
    Pet.find()
      .then(pets => res.json(pets))
      .catch(err => res.json(err));
    console.log("here");
  },
  pet: function(req, res) {
    Pet.find(req.pet)
      .then(pets => res.json(pets))
      .catch(err => res.json(err));
  },
  add_pet: function(req, res) {
    const newPet = new Pet(req.body);
    newPet
      .save()
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  remove_pet: function(req, res) {
    Pet.remove({
      pet: req.params.pet
    })
      .then(pets => res.json(pets))
      .catch(err => res.json(err));
  },
  show_pet: function(req, res) {
    Pet.findOne({
      pet: req.params._id
    })
      .then(pets => res.json(pets))
      .catch(err => res.json(err));
  }
};
