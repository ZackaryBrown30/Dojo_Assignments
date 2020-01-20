Quoting Dojo/ 
    ^ Client/ **
        ^ Static/ *
        ^ Views/ *
            index.ejs
            main.ejs
    ^ node_modules/ **

    ^ Server / **
        ^ config/ *
            mongoose.js
            routes.js
        ^ controllers/ *
            quotes.js
        ^ models/ *
            quote.js
        server.js * 

        package.json

**** Notice that your package.json, your server.js, and your node_modules are all within your main project folder.  No matter what you decide on for your folder structure, those files will never move.
 -
Otherwise, the MEAN stack is incredibly flexible in how you can modularize. 
For now, follow the modularization technique that we are giving you.
 -
Later on, once you understand the fundamentals, you'll be able to modularize however you see fit!
 -

tp export and import files requires a simple --
var dictionary = require('./dictionary.js');
-- in the recipeint file and --
module.exports = dictionary -- or function or variable whatever needs to be sent. 
-- to be placed in the file that is the source of the data

require and module.exports are the two most important tools when modularizing your code. Make sure to fully understand these before moving on to the next sections.

if the require statement is not held in a variable the value is prone to being overwritten as it is a simple function return statemnt. ensure to hold its value if one hopes to keep it. 

Model --	    Communicates with the database
View --	        What the user sees
Controller --   Directs traffic, receives data from the model, passes logic to the view