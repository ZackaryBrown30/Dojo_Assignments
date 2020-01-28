import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ShowComponent } from "./show/show.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { NewComponent } from "./new/new.component";
import { ShowByIdComponent } from "./show-by-id/show-by-id.component";
import { EditPetComponent } from "./edit-pet/edit-pet.component";

const routes: Routes = [
  { path: "pets", component: ShowComponent },
  { path: "**", component: PageNotFoundComponent },
  { path: "pets/new", component: NewComponent },
  { path: "pets/:_id", component: ShowByIdComponent },
  { path: "pets/:_id/edit", component: EditPetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
