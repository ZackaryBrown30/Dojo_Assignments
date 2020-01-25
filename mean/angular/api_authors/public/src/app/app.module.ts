import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AllAuthorsComponent } from "./all-authors/all-authors.component";
import { NewAuthorComponent } from "./new-author/new-author.component";
import { EditAuthorComponent } from "./edit-author/edit-author.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    AllAuthorsComponent,
    NewAuthorComponent,
    EditAuthorComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
