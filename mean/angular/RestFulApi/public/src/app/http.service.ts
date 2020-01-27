import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {}

  getTasks() {
    let Observable = this._http.get("/tasks");
    Observable.subscribe(data => console.log("Got our tasks!", data));
    return this._http.get("/tasks");
  }
  getOneTask(id) {
    return this._http.get("/view/" + id);
  }
}
