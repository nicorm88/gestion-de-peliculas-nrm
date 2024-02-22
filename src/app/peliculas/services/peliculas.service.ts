import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Pelicula, PeliculaBuscada, TopLevel } from '../interfaces/pelicula.interface';
import { Observable, catchError, map, of } from "rxjs";
import { FILM_HEADER, enviroments, enviromentsSGE } from "src/environments/environments";
import { FechaHoraService } from "./fecha.service";
import { TopLevel as TopLevelBusqueda } from "../interfaces/busqueda.interface";
import { ApiResponse } from "src/app/auth/interfaces/api-response";
import { CommonService } from "src/app/auth/services/common.service";

@Injectable({providedIn: 'root'})
export class PeliculaService {

  private baseUrl: string = enviroments.baseUrl
  private baseUrlSGE: string = enviromentsSGE.baseUrl
  public listaFavs: string[] = []

  constructor(
    private http: HttpClient,
    private fechaService: FechaHoraService,
    private commonService: CommonService
    ) { }

  getPeliculas(): Observable<TopLevel> {
    return this.http.get<TopLevel>(`${ this.baseUrl }/discover/movie?primary_release_date.lte=${this.fechaService.obtenerFechaActual()}&sort_by=primary_release_date.desc`, {headers:FILM_HEADER})
  }

  getPeliculaById(id: string): Observable<PeliculaBuscada> {
    return this.http.get<PeliculaBuscada>(`${ this.baseUrl }/movie/${ id }`, {headers:FILM_HEADER})
  }

  getSuggestions(query: string,page:number): Observable<TopLevelBusqueda> {
    return this.http.get<TopLevelBusqueda>(`${this.baseUrl}/search/movie?query=${ query }&page=${page}`, {headers:FILM_HEADER})
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

  getFavoritas(id_usuario: string | null): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseUrlSGE}/favoritas.php?id_usuario=${id_usuario}`, { headers: this.commonService.getHeaders() })
  }

  addFavorita(id_pelicula: number, id_usuario: string): Observable<ApiResponse>{
    const body = JSON.stringify({ id_pelicula: id_pelicula, id_usuario: id_usuario });
    return this.http.post<ApiResponse>(`${this.baseUrlSGE}/favoritas.php`,body, { headers: this.commonService.getHeaders() })
  }

  deleteFavorita(id_pelicula: number, id_usuario: string): Observable<ApiResponse>{
    return this.http.delete<ApiResponse>(`${this.baseUrlSGE}/favoritas.php?id_pelicula=${id_pelicula}&id_usuario=${id_usuario}`, { headers: this.commonService.getHeaders() });
  }
}
