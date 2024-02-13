import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from '../../interface/pelicula.interface';

@Component({
  selector: 'peliculas-pelicula-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit{
  @Input()
  public pelicula!: Pelicula

  ngOnInit(): void {
    if(!this.pelicula) throw new Error('Pelicula property is required');
  }
}
