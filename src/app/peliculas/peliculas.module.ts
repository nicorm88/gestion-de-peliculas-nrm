import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PeliculasRoutingModule } from './peliculas-routing.module';
import { CardComponent } from './components/card/card.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { PeliculaPageComponent } from './pages/pelicula-page/pelicula-page.component';
import { PeliculaImagePipe } from './pipes/peliculas-image.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle'; // Importa MatButtonToggleModule aquí
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { CardBusquedaComponent } from './components/cardBusqueda/cardBusqueda.component';
import { UsuariosComponent } from './pages/usuarios-page/usuarios.component';
import { CrudMaterialModule } from '../shared/crud-material/crud-material.module';
import { AddUsuarioComponent } from './pages/usuarios-page/add-usuario/add-usuario.component';
import { EditUsuarioComponent } from './pages/usuarios-page/edit-usuario/edit-usuario.component';
import { DeleteUsuarioComponent } from './pages/usuarios-page/delete-usuario/delete-usuario.component';
import { FavoritasPageComponent } from './pages/favoritas-page/favoritas-page.component';
@NgModule({
  declarations: [
    LayoutPageComponent,
    CardComponent,
    CardBusquedaComponent,
    ListPageComponent,
    PeliculaPageComponent,
    PeliculaImagePipe,
    SearchPageComponent,
    UsuariosComponent,
    AddUsuarioComponent,
    EditUsuarioComponent,
    DeleteUsuarioComponent,
    FavoritasPageComponent
  ],
  imports: [
    CommonModule,
    PeliculasRoutingModule,
    MaterialModule,
    CrudMaterialModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatButtonToggleModule // Añade MatButtonToggleModule aquí
  ]
})
export class PeliculasModule { }
