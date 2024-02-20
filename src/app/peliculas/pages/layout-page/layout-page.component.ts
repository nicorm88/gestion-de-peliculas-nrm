import { Usuario } from './../../../auth/interfaces/usuario';
import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: [
    './layout-page.component.scss'
  ]
})
export class LayoutPageComponent implements OnInit{

  constructor(
    private authService:AuthService,
    private router: Router
  ){}

  ngOnInit(): void{
  }

  public sidebarItems = [
    { label: 'Listado', icon: 'label', url: './list' },
    { label: 'Buscar', icon: 'search', url: './search' },
    { label: 'Usuarios', icon: 'account_circle', url: './users' }
  ]

  onLogout():void{
    this.authService.doLogout();
    this.router.navigate(['/auth'])
  }

  get user(): Usuario | undefined{
    return this.authService.currentUser
  }

  get id_rol(): string | null{
    return localStorage.getItem('id_rol')
  }
}
