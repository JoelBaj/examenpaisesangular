import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit{
  
  loading: boolean = false;
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;


  constructor(private paisService: PaisService) { 
  }

  ngOnInit() {
    this.obtenerPaises();
  }

  obtenerPaises() {
    this.loading = true; 
    this.paisService.getPais().subscribe(
      (paises) => {
        this.paises = paises;
        this.loading = false; 
      },
      (error) => {
        this.loading = false;
        this.hayError = true;
      }
    );
  }

  buscar( termino: string) {
    this.loading = true; 
    this.hayError = false;
    this.termino = termino;


    this.paisService.buscarPais(termino)
      .subscribe((paises) => {
        console.log(paises)
        this.paises = paises;
        this.loading = false; 

      },(err)=> {
        this.hayError = true;
        this.loading = false;
        this.paises = []
      }
      );
  }
  sugerencias(termino:string) { 
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    this.paisService.buscarPais(termino)
      .subscribe(paises => this.paisesSugeridos = paises.splice(0, 5),
        (err) => this.paisesSugeridos = []
      );

  }

  buscarSugerido(termino:string) { 
    this.buscar(termino)

  }

}
