import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { PeliculaPageComponent } from './pages/pelicula-page/pelicula-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { UsuariosComponent } from './pages/usuarios-page/usuarios.component';
import { FavoritasPageComponent } from './pages/favoritas-page/favoritas-page.component';

const routes: Routes = [
  {
    path:'',
    component: LayoutPageComponent,
    children: [
      { path: 'list', component: ListPageComponent },
      { path: 'search', component: SearchPageComponent},
      { path: 'favoritas', component: FavoritasPageComponent},
      { path: 'users', component: UsuariosComponent},
      { path: ':id', component: PeliculaPageComponent},
      { path: '**', redirectTo: 'list' }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculasRoutingModule { }
