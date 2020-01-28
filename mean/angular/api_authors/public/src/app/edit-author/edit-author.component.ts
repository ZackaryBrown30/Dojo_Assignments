import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { HttpService } from "../http.service";

@Component({
  selector: "app-edit-author",
  templateUrl: "./edit-author.component.html",
  styleUrls: ["./edit-author.component.css"]
})
export class EditAuthorComponent implements OnInit {
  gonnaEditIt: any;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _httpService: HttpService
  ) {
    this.gonnaEditIt = { name: "" };
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      console.log(params.athorId);
      this._httpService.getOneAuthor(params.authId).subscribe((authorObj: any) => {
        this.gonnaEditIt = authorObj.author;
      });
    });
  }
}
