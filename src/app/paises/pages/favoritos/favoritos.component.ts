import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  paisesFavoritos: Country[] = [];
  
  constructor(private paisService: PaisService) { }

  ngOnInit() {
    this.obtenerPaisesFavoritos();
  }

  obtenerPaisesFavoritos(): void {
    this.paisesFavoritos = this.paisService.getPaisesFavoritos();
  }

  eliminarPaisFavorito(index: number): void {
    this.paisesFavoritos.splice(index, 1);
    localStorage.setItem('paisesFavoritos', JSON.stringify(this.paisesFavoritos));
  }
}
