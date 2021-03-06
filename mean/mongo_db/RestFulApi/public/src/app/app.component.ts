import { HttpService } from "./http.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  newTask: any;
  tasks = [];
  onetask;

  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.newTask = { title: "", description: "" };
    this.getTasksFromService();
  }

  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our tasks!", data);
      this.tasks = data["tasks"];
    });
  }
  onSubmit() {
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {
      console.log("Got Data Back", data);
      this.newTask = { title: "", description: "" };
    });
  }
}
