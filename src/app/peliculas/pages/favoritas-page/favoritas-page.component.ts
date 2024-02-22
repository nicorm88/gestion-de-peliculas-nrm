import { Usuario } from '../../interfaces/usuario';
import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';
import { PeliculaService } from '../../services/peliculas.service';
import { PeliculaBuscada } from '../../interfaces/pelicula.interface';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-layout-page',
  templateUrl: './favoritas-page.component.html',
  styleUrls: [
    './favoritas-page.component.scss'
  ]
})
export class FavoritasPageComponent implements OnInit{

  public pelis_fav: PeliculaBuscada[] = [];
  private favoritas: string[] = [];
  private ids_pelados: number[] | string[] = [];

  constructor(
    private peliculaService:PeliculaService,
    private router: Router
  ){}

  ngOnInit(): void{
    this.getFavoritas()
  }

  async getFavoritas(){
    const RESPONSE =await this.peliculaService.getFavoritas(this.id_usuario).toPromise()

    if(RESPONSE!.ok){
      this.favoritas = RESPONSE!.data.map((item: { id_pelicula: any }) => item.id_pelicula);
      console.log(this.favoritas)
      for (const item of RESPONSE!.data) {
        this.ids_pelados[item.id_pelicula] = item.id_fav;
      }
    }
    this.obtenerPeliculas()
  }

  async obtenerPeliculas() {
    const observables: Observable<PeliculaBuscada>[] = [];

    for (const id of this.favoritas) {
      const observable = this.peliculaService.getPeliculaById(id); // Convertir la cadena a un número
      observables.push(observable);
    }
    console.log(observables)

    forkJoin(observables).subscribe({
      next: (peliculas: PeliculaBuscada[]) => {
        this.pelis_fav = peliculas;
      },
    });
    console.log(this.pelis_fav)
  }

  get id_usuario(): string | null{
    return localStorage.getItem('id_usuario')
  }

  navigateToDetails(id:number){
    this.router.navigate(['/peliculas/',id])
  }
}
