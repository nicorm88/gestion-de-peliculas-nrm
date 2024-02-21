import { Usuario } from '../../interfaces/usuario';
import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';
import { PeliculaService } from '../../services/peliculas.service';
import { PeliculaBuscada } from '../../interfaces/pelicula.interface';

@Component({
  selector: 'app-layout-page',
  templateUrl: './favoritas-page.component.html',
  styleUrls: [
    './favoritas-page.component.scss'
  ]
})
export class FavoritasPageComponent implements OnInit{

  public favoritas!: Promise<PeliculaBuscada[]>;

  constructor(
    private peliculaService:PeliculaService,
    private router: Router
  ){}

  ngOnInit(): void{
    this.getFavoritas()
  }

  async getFavoritas(){
    const RESPONSE =await this.peliculaService.getFavoritas(this.id_usuario)
    this.favoritas = RESPONSE as PeliculaBuscada[]
  }

  get id_usuario(): string | null{
    return localStorage.getItem('id_usuario')
  }
}
