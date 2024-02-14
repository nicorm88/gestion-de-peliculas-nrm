import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Pelicula, TopLevel } from "../interfaces/pelicula.interface";
import { Observable, catchError, map, of } from "rxjs";
import { FILM_HEADER, enviroments } from "src/environments/environments";

@Injectable({providedIn: 'root'})
export class PeliculaService {

  private baseUrl: string = enviroments.baseUrl
  constructor(private http: HttpClient) { }

  getPeliculas(): Observable<TopLevel> {
    return this.http.get<TopLevel>(`${ this.baseUrl }/discover/movie`, {headers:FILM_HEADER})
  }

  getPeliculaById(id: string): Observable<Pelicula | undefined> {
    return this.http.get<Pelicula>(`${ this.baseUrl }/movie/${ id }`)
    .pipe( catchError( error => of(undefined)));
  }

  getSuggestions(query: string): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(`${this.baseUrl}/peliculas?q=${ query }&_limit=6`)
  }

  addHero(hero: Pelicula): Observable<Pelicula>{
    return this.http.post<Pelicula>(`${ this.baseUrl }/peliculas`, hero)
  }

  updateHero(hero: Pelicula): Observable<Pelicula>{
    return this.http.patch<Pelicula>(`${ this.baseUrl }/peliculas/${ hero.id }`, hero)
  }

  deleteHeroById(id: string): Observable<boolean>{
    return this.http.delete(`${ this.baseUrl }/peliculas/${ id }`)
      .pipe(
        map( response => true ),
        catchError( error => of(false) )
      )
  }
}
