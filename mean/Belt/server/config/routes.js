const pets = require("../controllers/pets");

module.exports = function(app) {
  app.get("/pets/show", pets.index);

  app.post("/pets/new", pets.add_pet);

  app.get("/adopted/:pets", pets.remove_pet);

  app.get("/find/:_id", pets.show_pet);

  app.put("/update/:_id", pets.update_pet);
};
