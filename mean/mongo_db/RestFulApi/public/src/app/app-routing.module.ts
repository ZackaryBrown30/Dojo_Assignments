
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ShowtaskComponent } from './showtask/showtask.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TaskComponent } from './task/task.component';
const routes: Routes = [
  { path: "showtask", component: ShowtaskComponent },
  { path: "", pathMatch: "full", redirectTo: "/alpha" }, 
  { path: "**", component: PageNotFoundComponent },
  { path: 'task/:id', component: TaskComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
