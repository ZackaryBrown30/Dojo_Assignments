import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable()

export class HttpService {
  addLike(newPet: any) {
    throw new Error("Method not implemented.");
  }
  constructor(private _http: HttpClient) {}

  getPets() {
    let Observable = this._http.get("/pets");
    Observable.subscribe(data => console.log("Got our Cuties!", data));
    return this._http.get("/pets");
  }
  getPetById(_id: any) {
    return this._http.get("/pets/" + _id);
  }
  addPet(newPet) {
    let ob = this._http.post("/pets/new/", newPet);
    ob.subscribe(data => console.log("Got our Cuties!", data));
    return this._http.post("/pets/new", newPet);
  }

}
