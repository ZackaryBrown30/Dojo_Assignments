import { HttpService } from "./http.service";
import { Component, OnInit } from "@angular/core";
// Implement OnInit.

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

export class AppComponent implements OnInit {
  title = "public";
  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.getTasksFromService();
  }
  getTasksFromService() {
    this._httpService.getTasks();
  }
}
