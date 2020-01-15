Mongoose_Commands.md

<script>
	
	// Create a Schema for Users

const UserSchema = new mongoose.Schema({
 name: {type: String},
 age: {type: Number}
}, {timestamps: true})
// create a constructor function for our model and store in variable 'User'
const User = mongoose.model('User', UserSchema);

/* SCHEMA WITH VALIDATIONS */

const UserSchema = new mongoose.Schema({
    first_name:  { type: String, required: true, minlength: 6},
    last_name: { type: String, required: true, maxlength: 20 },
    age: { type: Number, min: 1, max: 150 },
    email: { type: String, required: true }
}, {timestamps: true });



/* FIND ALL USERS*/

// ...retrieve an array of all documents in the User collection
User.find()
    .then(users => {
        // logic with users results
    })
    .catch(err => res.json(err));

/* Find Specified Users */

// ...retrieve an array of documents matching the query object criteria
User.find({name:'Jessica'}) 
    .then(usersNamedJessica => {
        // logic with usersNamedJessica results
    })
    .catch(err => res.json(err));

/* Find single User (by Id) */
/*  ITS THE .findOne() */

// ...retrieve 1 document (the first record found) matching the query object criteria
User.findOne({_id: '5d34d361db64c9267ed91f73'})
    .then(user => {
        // logic with single user object result
    })
    .catch(err => res.json(err));

/* Create A User */
// ...create a new document to store in the User collection and save it to the DB.
const bob = new User();
bob.name = 'Bob Ross';
bob.age = 42;
bob.save()
    .then(newUser => {
        // logic with succesfully saved newUser object
    })
    .catch(err => res.json(err));
 // If there's an error and the record was not saved, this (err) will contain validation errors.

/* Create A User  (SIMPLIFIED??) */

// ...create a new document to store in the User collection and save it to the DB.
const userData = req.body;
User.create(userData)
    .then(newUser => {
        // logic with succesfully saved newUser object
    })
    .catch(err => res.json(err));
 // If there's an error and the record was not saved, this (err) will contain validation errors.



/* DELETE All USERs */

// ...delete all documents of the User collection
User.remove()
    .then(deletedUsers => {
        // logic (if any) with successfully removed deletedUsers object
    })
    .catch(err => res.json(err));


/* DELETE ONE USER */

// ...delete 1 document that matches the query object criteria
User.remove({_id: '5d34d361db64c9267ed91f73'})
    .then(deletedUser => {
        // logic (if any) with successfully removed deletedUser object
    })
    .catch(err => res.json(err));

/* Advanced Queries
// An alternative way to update a record */
User.findOne({name: 'Bob Ross'})
    .then(user => {
        user.name = 'Rob Boss';
        user.pets.push({name: 'Sprinkles', type: 'Chubby Unicorn'});
        return user.save();
    })
    .then(saveResult => res.json(saveResult))
		.catch(err => res.json(err));
		
/* Validate for uniqueness before creating new DB entry  */

User.find({name: req.body.name})
    .then(user => {
        if (user.length > 0) {
            return Promise.reject('Error Message Goes Here');
        }
        return User.create(req.body);
    })
    .then(saveResult => res.json(saveResult))
    .catch(err => res.json(err));


Displaying validation errors:   
 Use express flash - npm i express-flash - to display your errors. In order to use express flash messages, you must have session.

server.js side:


...  // set up other middleware, such as session
const flash = require('express-flash');
app.use(flash());                /* --  Need to import and use both lines */
app.post('/users', (req, res) => {
    const user = new User(req.body);
    user.save()
        .then(() => res.redirect('/'))
        .catch(err => {
            console.log("We have an error!", err);
            // adjust the code below as needed to create a flash message with the tag and content you would like
            for (var key in err.errors) {
                req.flash('registration', err.errors[key].message);
            }
            res.redirect('/');
        });
});


/* index.ejs side: */


/* tip to easily see objects printed in full instead of [object Object] */
<%- JSON.stringify(messages) %> 
/*  based on the structure of your messages, determine how to display them */
<% if(messages.registration) { %>
     <% for (var x of messages.registration) { %>
      <h3><%= x %></h3>
     <% } %>
 <% } %>


ALSO !! MONGOOSE VALIDATOR !!

installation
$ npm i mongoose-validator -S

var mongoose = require('mongoose')
var validate = require('mongoose-validator')

var nameValidator = [
  validate({
    validator: 'isLength',
    arguments: [3, 50],
    message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters',
  }),
  validate({
    validator: 'isAlphanumeric',
    passIfEmpty: true,
    message: 'Name should contain alpha-numeric characters only',
  }),
]

var Schema = new mongoose.Schema({
  name: { type: String, required: true, validate: nameValidator },
})
