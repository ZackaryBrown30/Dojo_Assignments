import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { HttpService } from "../http.service";

@Component({
  selector: "app-edit-author",
  templateUrl: "./edit-author.component.html",
  styleUrls: ["./edit-author.component.css"]
})
export class EditAuthorComponent implements OnInit {
  gonnaEditIt: {name: string} = { name: ''};
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _httpService: HttpService
  ) {}

  ngOnInit() {
    this._route.params.subscribe(params => {
      console.log(params.athorId);
      this._httpService.getOneAuthor(params.athorId);
      .subscribe((authorObj) =>) {
        this.gonnaEditIt = authorObj
      }
    });
  }
}
