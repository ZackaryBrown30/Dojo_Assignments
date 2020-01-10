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
