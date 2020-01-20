module.exports = {
index: (req, res) => {
Old.find()
    .then(oldies => res.json(oldies))
    .catch(err => res.json(err));
},
getOldie: (req, res, id) => {
    Old.findOne({ _id: req.params.name })
    .then(oldies => res.json(oldies))
    .catch(err => res.json(err));
},
create: (req, res) => {
    const OldieData = req.body;
    Old.create(OldieData)
        .then(data => {res.json()
        })
        .catch(err => res.json(err));
},

}

