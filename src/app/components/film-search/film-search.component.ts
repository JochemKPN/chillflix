import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film';
import { tap, take, count } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { FilmsService } from 'src/app/service/films.service';

@Component({
  selector: 'app-film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.scss']
})
export class FilmSearchComponent implements OnInit {
  public films: Film[] = [];
  date = new Date();


  public onfilmToParent() {

  }

  public handleSearchInputChange(input: string): void {
    console.log(input)
    this.subscriptions.add(this.filmsService.searchFilms(input)
      .pipe(
        tap(films => this.films = films,
          error => console.error('fout in AppComponent bij ophalen films')
        ),
      ).subscribe(filmsResponse => this.films = filmsResponse))
  }

  private subscriptions: Subscription = new Subscription();

  constructor(private filmsService: FilmsService) {
    filmsService.allFilms().subscribe(films => this.films = films)
  }

  ngOnDestroy(): void { }

  ngOnInit(): void {
    this.subscriptions.add(this.filmsService.allFilms()
      .pipe(
        take( 1 ),
        tap(films => this.films = films,
          error => console.error('fout in AppComponent bij ophalen films')
        ),
      ).subscribe())
  }
}
