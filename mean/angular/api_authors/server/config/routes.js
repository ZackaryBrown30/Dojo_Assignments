// Controller
const authorsController = require("../controllers/authors");
// Export function that defines routes

module.exports = app => {
  app.get("/api/authors", authorsController.index);
  app.post("/api/authors", authorsController.create);
  app.get("/api/authors/:authorId", authorsController.getOneAuthor);
  app.delete("/api/authors/:authId", authorsController.delete);
  app.put("/api/authors/:authId", authorsController.update);
};
