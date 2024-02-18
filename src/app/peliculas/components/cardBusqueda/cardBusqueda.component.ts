import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Result } from '../../interfaces/busqueda.interface';

@Component({
  selector: 'peliculas-pelicula-card-busqueda',
  templateUrl: './cardBusqueda.component.html',
  styleUrls: [
    './cardBusqueda.component.scss'
  ]
})
export class CardBusquedaComponent implements OnInit{
  @Input()
  public pelicula!: Result

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
