CREATE

db.collection.insertOne();
db.collection.insertMany();

READ

db.collection.find();

UPDATE

db.collection.updateOne();
db.collection.updateMany();
db.collection.replaceOne();

DELETE OPTIONS

db.collection.deleteOne();
db.collection.deleteMany();

---

Create advanced

db.collection.insterOne({
name: "John",
Lname: "Doe",
age: 30,
status: "dead"
});
-- creates the above "table" known here as a collection and auto populates the \_id field.
