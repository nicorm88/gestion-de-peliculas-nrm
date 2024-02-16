import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from '../../interfaces/pelicula.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'peliculas-pelicula-card',
  templateUrl: './card.component.html',
  styleUrls: [
    './card.component.scss'
  ]
})
export class CardComponent implements OnInit{
  @Input()
  public pelicula!: Pelicula

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
    if(!this.pelicula) throw new Error('Pelicula property is required');
  }

  navigateToDetails(id:number){
    this.router.navigate(['/peliculas',id])
  }
}
