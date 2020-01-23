STEP 1 
ng new public
cd public
ng build --watch
ng serve  (defaults to 4200)

STEP 2 

in Root at server.js
Point views to Angular with 
<script>
app.use(express.static( __dirname + '/public/dist/public' ));
</script>

STEP 3 
Setup Root component Modules and Services
 

