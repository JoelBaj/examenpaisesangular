import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisesRoutingModule } from './paises-routing.module';
import { PaisComponent } from './pages/pais/pais.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { InputComponent } from './components/input/input.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './pages/spinner/spinner.component';


@NgModule({
  declarations: [
    PaisComponent,
    FavoritosComponent,
    InputComponent,
    TablaComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    PaisesRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports:[
    PaisComponent,
    FavoritosComponent,
  ]
})
export class PaisesModule { }
