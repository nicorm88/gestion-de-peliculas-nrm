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

@NgModule({
  declarations: [
    LayoutPageComponent,
    CardComponent,
    CardBusquedaComponent,
    ListPageComponent,
    PeliculaPageComponent,
    PeliculaImagePipe,
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    PeliculasRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatButtonToggleModule // Añade MatButtonToggleModule aquí
  ]
})
export class PeliculasModule { }
