import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PeliculasRoutingModule } from './peliculas-routing.module';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    LayoutPageComponent, CardComponent
  ],
  imports: [
    CommonModule,
    PeliculasRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class PeliculasModule { }
