import { PeliculaService } from './../../services/peliculas.service';
import { Component } from '@angular/core';
import { Pelicula, TopLevel } from '../../interfaces/pelicula.interface';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [
  ]
})
export class ListPageComponent {

  public listadoPeliculas: Pelicula[] = [];

  constructor(public peliculaService:PeliculaService){}

  ngOnInit():void {
    this.peliculaService.getPeliculas().subscribe(toplevel => this.listadoPeliculas = toplevel.results)
  }
}
