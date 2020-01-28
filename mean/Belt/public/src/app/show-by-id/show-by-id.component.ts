import { Component, OnInit } from "@angular/core";
import { HttpService } from "./http.service";

@Component({
  selector: "app-show-by-id",
  templateUrl: "./show-by-id.component.html",
  styleUrls: ["./show-by-id.component.css"]
})
export class ShowByIdComponent implements OnInit {
  pets = [];
  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.getPetById();
  }

  getPetById() {
    let observable = this._httpService.getPets();
    observable.subscribe(data => {
      console.log("Got our pets!", data);
      this.pets = data["pets"];
    });
  }
}
