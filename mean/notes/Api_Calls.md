using Api data

Api dependent data should be written within the Api call in the appropriate place so that the data dependent on the Api call does not freeze the rest of the funcitonal data on the page.

- This might mean that the bulk of ones code will be written within the scope of the Api callback function;

example

<script> 
// assuming you have jQuery
$(document).ready(function(){
    var favoritePokemon;
    // the given link is for Bulbasaur's information
    $.get("https://pokeapi.co/api/v2/pokemon/1/", function(data){     
        favoritePokemon = data.name;
    });
    console.log("Got my favorite Pokemon", favoritePokemon);      // Predict the output!
});       

ERROR - this would not give the API time to return the dependent data, and would wither break the page or freeze the page until the Api returns its data. 
best case scenario you would see "Got my favorite Pokemon undefined";


HOWEVER! this works -- !! 

// assuming you have jQuery
$(document).ready(function(){
    var favoritePokemon;
    // the given link is for Bulbasaur's information
    $.get("https://pokeapi.co/api/v2/pokemon/1/", function(data){ 
    	favoritePokemon = data.name;
	console.log("Got my favorite Pokemon", favoritePokemon);      // Predict the output!
    });
}); 

This is done correctly, within the function callback; 
response - "Got my favorite Pokemon bulbasaur"

!! the kneejerk response of using a .setTimeout() function is a poor bandaid for the misconcenptions of using API's within thier  call stack resolution.
