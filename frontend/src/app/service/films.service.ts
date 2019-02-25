import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Film } from '../models/film';

@Injectable({
    providedIn: 'root'
})
export class FilmsService {
    constructor(private http: HttpClient) { }

    public filmById(id: string): Observable<Film> {
        return this.http
            .get<OMDBFilm>(
                'http://www.omdbapi.com/?apikey=e36ea2a2&i=' + id
            )
            .pipe(map(FilmsService.OMDBMovieToFilm)
            )
    }

    public allFilms(): Observable<Film[]> {
        return this.http.get<IOMDBSearchResponse>("http://www.omdbapi.com/?apikey=e36ea2a2&s=seven")
            .pipe(
                map(FilmsService.IOMDBSearchResponseToFilmsMapper)
            )
    }

    public searchFilms(searchQuery: string | undefined): Observable<Film[]> {
        return this.http.get<IOMDBSearchResponse>("http://www.omdbapi.com/?apikey=e36ea2a2&s=" + searchQuery)
            .pipe(
                map(FilmsService.IOMDBSearchResponseToFilmsMapper)
            )
    }

    private static IOMDBSearchResponseToFilmsMapper(omdbSearchResponse: IOMDBSearchResponse): Film[] {
        return omdbSearchResponse.Search.map(FilmsService.OMDBMovieToFilm)
    }

    private static OMDBMovieToFilm(omdbFilm: OMDBFilm): Film {
        return new Film(omdbFilm.Poster, omdbFilm.Title, omdbFilm.Type, omdbFilm.Year, omdbFilm.imdbID)
    }

    private static IOMDBSearchToDetails(omdbSearchToDetails: IOMDBSearchToDetails): Film {
        return new Film(omdbSearchToDetails.Title, omdbSearchToDetails.Type, omdbSearchToDetails.Year, omdbSearchToDetails.imdbID, omdbSearchToDetails.Production)
    }
}

interface IOMDBSearchResponse {
    Search: OMDBFilm[];
    totalResults: string;
    Response: string;
}

interface OMDBFilm {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

interface IOMDBSearchToDetails {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: ImageData;
    Ratings: string;
    imdbID: string;
    Type: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: boolean;
}
