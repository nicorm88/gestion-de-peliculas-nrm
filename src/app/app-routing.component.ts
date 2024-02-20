import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';
import { AuthGuardService } from './auth/guards/auth.guards';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m=>m.AuthModule),
    // canMatch: [canMatchGuardLogin],
  },
  {
    path: 'peliculas',
    loadChildren: () => import('./peliculas/peliculas.module').then( m=>m.PeliculasModule),
    canActivate: [AuthGuardService],
    // canActivate: [canActivateGuard]
  },
  {
    path: '404',
    component: Error404PageComponent
  },
  {
    path: '',
    redirectTo: 'peliculas',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
