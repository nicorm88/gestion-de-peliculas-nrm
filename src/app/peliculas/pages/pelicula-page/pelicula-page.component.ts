import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { PeliculaService } from '../../services/peliculas.service';
import { Pelicula, PeliculaBuscada } from '../../interfaces/pelicula.interface';
import { FavoritasPageComponent } from '../favoritas-page/favoritas-page.component';

@Component({
  selector: 'app-pelicula-page',
  templateUrl: './pelicula-page.component.html',
  styleUrls: [
    './pelicula-page.component.scss'
  ]
})
export class PeliculaPageComponent implements OnInit{

  public pelicula?: PeliculaBuscada
  private favoritas: string[] = [];

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
      this.getFavoritas()
  }

  async getFavoritas(){
    const RESPONSE =await this.peliculaService.getFavoritas(this.id_usuario).toPromise()

    if(RESPONSE!.ok){
      this.favoritas = RESPONSE!.data.map((item: { id_pelicula: any }) => item.id_pelicula);
      console.log(this.favoritas)
    }

  }

  getIsFav(): boolean{
    let loes = false
    this.favoritas.forEach(fav => {
      if(fav==this.pelicula?.id.toString()){
        loes=true;
      }
    });
    return loes;
  }

  montarURL(pelicula:PeliculaBuscada): string{
    console.log("https://image.tmdb.org/t/p/w500"+pelicula.backdrop_path)
    return "https://image.tmdb.org/t/p/w500"+pelicula.backdrop_path
  }

  get id_usuario(): string | null{
    return localStorage.getItem('id_usuario')
  }

  async anadirFav(){
    this.peliculaService.addFavorita(this.pelicula!.id,this.id_usuario!).toPromise()
    this.getFavoritas()
  }

  async quitarFav(){
    this.peliculaService.deleteFavorita(this.pelicula!.id,this.id_usuario!).toPromise()
    this.getFavoritas()
  }
}
