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
Setup Root 
Component Modules and Services
 
    A.
    Module imports:
        httpClientModule,
        FormModule, orrr reactiveFormsModule,
        BrowserModule,
        RouterModule
        CommonModule??

    B.
    Declarations: 
        Components meant for html
        && Router(special)

    C.
    Providers: 
        ways the code gets Auto Wired

    D. 
        http.service.ts takes Get and post functionality?
                import { Injectable } from '@angular/core';
                import { HttpClient } from '@angular/common/http';


                @Injectable({
                providedIn: 'root'
                })
                export class HttpService {
                constructor(private _http: HttpClient)
                {
                    this.getPokemon()
                }
                
                getPokemon(){
                    let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
                    bulbasaur.subscribe(data => console.log("Bulbasaur!", data));
                }
                }

STEP 4. 

    Setup ins and outs? 


