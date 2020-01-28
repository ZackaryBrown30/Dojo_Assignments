/* Do i need to import the router outlet here? */

import { HttpService } from "./http.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  newPet: any;
  pets = [];
  onepet: any;

  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.newPet = { type: "", name: "", description: "" };
    this.getPetsFromService();
  }

  getPetsFromService() {
    let observable = this._httpService.getPets();
    observable.subscribe(data => {
      console.log("Got our tasks!", data);
      this.pets = data["pets"];
    });
  }
  onSubmit() {
    let observable = this._httpService.addPet(this.newPet);
    observable.subscribe(data => {
      console.log("Got Data Back", data);
      this.newPet = { type: "", name: "", description: "" };
    });
  }
  addLikeById() {
    let observable = this._httpService.addLike(this.newPet);
    observable.subscribe(data => {
      console.log("Got Data Back", data);
      this.newPet = { type: "", name: "", description: "" };
    });
  }
}
