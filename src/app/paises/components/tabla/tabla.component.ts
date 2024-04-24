import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  
  @Input() paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  agregarAFavoritos(pais: Country) {
    
    const paisesFavoritos: Country[] = this.paisService.getPaisesFavoritos();
    
    if (this.paisEstaEnFavoritos(pais, paisesFavoritos)) {
      alert('el pais ya esta guardado en favoritos');
    } else {
      alert('pais guardado');
      paisesFavoritos.push(pais);
      this.paisService.guardarPais(pais);
    }
  }

  paisEstaEnFavoritos(pais: Country, paisesFavoritos: Country[]): boolean 
  {
    return paisesFavoritos.some(p => p.name.common === pais.name.common);
  }
}
