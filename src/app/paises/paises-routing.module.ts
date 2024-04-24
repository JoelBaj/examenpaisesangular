import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisComponent } from './pages/pais/pais.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { loginGuard } from '../guards/login.guard';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'pais', component:PaisComponent,canActivate:[loginGuard]},
      {path:'favoritos', component:FavoritosComponent,canActivate:[loginGuard]},
      {path:'**', redirectTo:'pais'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisesRoutingModule { }
