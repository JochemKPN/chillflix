import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from 'src/app/service/films.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent implements OnInit {
  public dataButIDontKnowWhatKind?: any;
  constructor(private activatedRoute: ActivatedRoute,
    private filmsService: FilmsService) {
  }
  ngOnInit(): void {
    this.filmsService.filmById(this.activatedRoute.snapshot.params.imdbId)
    .subscribe( data => this.dataButIDontKnowWhatKind = data)
  }
  filmId: any;
}
