const mongoose = require("mongoose");
const Author = mongoose.model("Author");

module.exports = {
  index(req, res) {
    Author.find()
      .then(authors => {
        res.json({ authors: authors });
      })
      .catch(err => res.json({ errors: err }));
  },
  create(req, res) {
    Author.create(req.body)
      .then(author => {
        res.json({ author: newAuthor });
      })
      .catch(err => res.json({ errors: err }));
  },
  getOneAuthor(req, res) {
    Author.findById(req.params.authId)
      .then(Author => {
        console.log(author);
        res.json({ author: author });
      })
      .catch(err => res.json({ errors: err }));
  },
  delete(req, res) {
    Author.findByIdAndDelete(req.params.authId)
      .then(delAuthor => {
        console.log(delAuthor);
        res.json({ author: delAuthor });
      })
      .catch(err => res.json({ errors: err }));
  },
  update(req, res) {
    Author.findByIdAndUpdate(req.params.authId, req.body)
      .then(updatedAuthor => {
        console.log(updatedAuthor);
        res.json({ author: updatedAuthor });
      })
      .catch(err => res.json({ errors: err }));
  }
};

/* CRUD FOR MONGOOSE

Author.find()
Author.create(req.body)
Author.findByIdAndDelete(req.params.authId)
Author.findByIdAndUpdate(req.params.authId, req.body)

starts with name(req, res) {
    the above funciton
    .then blah
    .catch blah
}
*/
