COMMANDS FOR NODEJS FILES

brew install -g NODEJS
brew install -g npm ( usually inlcuded )
npm install -g nodemon

inside root of project directory
npm install express

npm install ejs
The <% %> tags are the delimiter for the embedded JavaScript.  
Using these tags allows us to run JavaScript code that can be embedded into the HTML document we are making.
with ejs - Notice the <% %> tags allow us to enter JavaScript code,
and the <%= %> tags actually print the JavaScript code to the document.

<script>
app.SOME-HTTP-VERB('/rubberbabybuggybumpers', (req, res) => { 
    // do stuff
});

<script>
GET ROUTE

app.get('/', (req, res) => {
  res.render('index', {title: "my root route"});
});

POST ROUTE

app.post('/users', (req, res) => {
    res.redirect('/');
});

____________ ORRR ______________

app.post('/users', (req, res) => {
    console.log(req.body) 
    res.redirect('/')
});

________________________________________________________________________________

$(document).ready(function(){
    // code goes in here
});


$() is a function call. 
-In this case, the dollar sign character is the name of the function! 
We can also see that it's taking the document object and then returning an object. 
How do we know it's returning an object?

.ready() is a method of that returned object. 
-Knowing that a function call is equal to whatever that function returns, 
we can see that $() returns something that has a .ready() method.

function(){ } is a callback!
- It's just an anonymous function that we passed into .ready(). 
We've been using callbacks since Web Fundamentals, even if we didn't see them!

What does $(document).ready(function(){}); do? 
It waits for the HTML DOM to finish loading, then it runs whatever we put into the callback function. 
JavaScript waits until the DOM finishes loading, and once the DOM finishes, we run our callback. 
That is the general logic that all of our callbacks will follow. 

TLDR!!!!
We request something to get done, and once that request is successful, we run code again!
________________________________________________________________________________

Callbacks are used to delegate functionality ***

- If a function takes a callback, that callback can do a myriad of things. 
This allows us to use our callback to be delegated to a specific task.


// This is a function that just prints the result of another list of instructions

function printResult(doSomething) {
    var result = doSomething();         // store the return value of the callback parameter
 console.log(result);                // print the result!
}
printResult(function returnFive(){ return 5 })  // this should print "5"

________________________________________________________________________________

When we have the following code in our app.js file: http.createServer(function (request, response){ ... }
then >

 -We're passing a callback function to the createServer method in the http object.
 -Whatever we put inside this function gets executed whenever a client sends a http request to the NodeJS server
 -When the client makes an http request the Node server will execute the function passed in the createServer method and also pass two variables to this function.
 -The request variable would contain information about the http request made (who it is, browser info, etc)
 -The response variable would have methods/properties you can access to render different response types back to the client.
 