import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';


interface MenuItem{
  texto:string;
  ruta:string;
}


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  authservice = inject(AuthService)

  constructor(private router:Router) { }

  Menu:MenuItem[] =[
    {texto:'Paises', ruta:'/paises/pais'},
    {texto:'Favoritos', ruta:'/paises/favoritos'},
    
  ]

  logout() { 
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }
}
