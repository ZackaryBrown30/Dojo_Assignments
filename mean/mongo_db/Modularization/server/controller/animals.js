module.exports = {
  index: (req, res) => {
    Animal.find()
      .then(data => res.render("index", { animals: data }))
      .catch(err => res.json(err));
  },
  getAnimal: (req, res) => {
    Animal.findOne({ _id: req.params.name })
      .then(data => res.render("individual", { animal: data }))
      .catch(err => res.json(err));
  },
  form_acceptinator_model_polulator: (req, res) => {
    const animal = new Animal();
    animal.name = req.body.name;
    animal.age = req.body.age;
    animal.cuteness = req.body.cuteness;
    animal.species = req.body.species;
    animal
      .save()
      .then(data => res.redirect("/"))
      .catch(err => {
        console.log("We have an error!", err);
        for (var key in err.errors) {
          req.flash("quote", err.errors[key].message);
        }
        res.redirect("/");
      });
  },
  burn_it_with_fire: (req, res) => {
    Animal.remove({ _id: req.params._id })
      .then(data => {
        res.redirect("/");
      })
      .catch(err => res.json(err));
  }
};
