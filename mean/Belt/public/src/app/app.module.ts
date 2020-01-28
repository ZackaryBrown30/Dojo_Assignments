import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpService } from "./http.service";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ShowComponent } from "./show/show.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { NewComponent } from "./new/new.component";
import { ShowByIdComponent } from "./show-by-id/show-by-id.component";
import { EditPetComponent } from "./edit-pet/edit-pet.component";

@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    PageNotFoundComponent,
    NewComponent,
    ShowByIdComponent,
    EditPetComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
