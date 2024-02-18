import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { PeliculaService } from '../../services/peliculas.service';
import { Result } from '../../interfaces/busqueda.interface';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: [
  ]
})
export class SearchPageComponent {
  public searchInput = new FormControl('');
  public peliculas: Result[] = [];
  public selectedPelicula?: Result;

  public page=1;

  constructor(private peliculaService: PeliculaService){}

  public searchPelicula(){
    if (this.page ==4){
      this.page=1
    }

    const value: string = this.searchInput.value || '';
    if(value != ''){
    this.peliculaService.getSuggestions(value,this.page).subscribe(
      peliculas => this.peliculas = peliculas.results

    );
    }
    console.log(this.peliculas)
  }

  public onSelectedOption(event: MatAutocompleteSelectedEvent){
    if(!event.option.value){
      this.selectedPelicula = undefined;
      return;
    }

    const pelicula: Result = event.option.value;
    this.searchInput.setValue(pelicula.name);
    this.selectedPelicula = pelicula;
    this.searchPelicula()
  }

  public cargarMas(){
    let distanciaAntes=this.peliculas.length
    this.page++;
    const value: string = this.searchInput.value || '';
    if(value != ''){
    this.peliculaService.getSuggestions(value,this.page).subscribe(
      peliculas => peliculas.results.forEach(pelicula => {
        this.peliculas.push(pelicula)
      })

    );
    }
    if(distanciaAntes==this.peliculas.length){
      this.page=4
    }
    console.log(this.peliculas)
  }
}
