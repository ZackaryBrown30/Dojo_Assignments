import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { AlphaComponent } from "./alpha/alpha.component";
import { BetaComponent } from "./beta/beta.component";
import { GammaComponent } from "./gamma/gamma.component";
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
@NgModule({
  declarations: [AppComponent, AlphaComponent, BetaComponent, GammaComponent, PagenotfoundComponent, PageNotFoundComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
