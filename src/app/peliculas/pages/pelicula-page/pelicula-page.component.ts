import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { PeliculaService } from '../../services/peliculas.service';
import { Pelicula, PeliculaBuscada } from '../../interfaces/pelicula.interface';

@Component({
  selector: 'app-pelicula-page',
  templateUrl: './pelicula-page.component.html',
  styleUrls: [
    './pelicula-page.component.scss'
  ]
})
export class PeliculaPageComponent implements OnInit{

  public pelicula?: PeliculaBuscada

  constructor(
    private peliculaService: PeliculaService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.peliculaService.getPeliculaById( id ) )
      ).subscribe( pelicula => {
        if( !pelicula ) return this.router.navigate([ '/peliculas/list' ]);

        this.pelicula = pelicula
        console.log(pelicula);

        return;
      } )
  }

  montarURL(pelicula:PeliculaBuscada): string{
    console.log("https://image.tmdb.org/t/p/w500"+pelicula.backdrop_path)
    return "https://image.tmdb.org/t/p/w500"+pelicula.backdrop_path
  }
}
