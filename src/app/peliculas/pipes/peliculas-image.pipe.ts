import { Pelicula, PeliculaBuscada } from './../interfaces/pelicula.interface';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'peliculaImage'
})
export class PeliculaImagePipe implements PipeTransform {

  transform(pelicula: Pelicula|PeliculaBuscada): string {
    if(!pelicula.poster_path){
      return 'assets/no-image2.png'
    }

    return 'https://image.tmdb.org/t/p/w500' + (pelicula.poster_path || pelicula.backdrop_path);
  }

}
