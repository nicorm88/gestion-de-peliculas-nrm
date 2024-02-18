import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/auth/interfaces/user.interface';
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
    { label: 'Añadir', icon: 'add', url: './new-pelicula' },
    { label: 'Buscar', icon: 'search', url: './search' }
  ]

  onLogout():void{
    this.authService.logout();
    this.router.navigate(['/auth'])
  }

  get user(): User | undefined{
    return this.authService.currentUser
  }
}
