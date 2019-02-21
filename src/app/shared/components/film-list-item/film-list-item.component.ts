import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Film } from "src/app/models/film";

@Component({
  selector: "app-film-list-item",
  templateUrl: "./film-list-item.component.html",
  styleUrls: ["./film-list-item.component.scss"]
})
export class FilmListItemComponent implements OnInit {
  @Input() public film?: Film = undefined;

  @Output() filmToParent: EventEmitter<Film> = new EventEmitter<Film>();
  titleChanged() {
    this.filmToParent.emit(this.film);
  }

  // @Output() orderFilm: EventEmitter<Film> = new EventEmitter<Film>();
  // titleChanged() {
  //   this.orderFilm.emit(this.film);
  // }


  constructor() {}

  ngOnInit() {
    // console.log(this.film);
  }
}
