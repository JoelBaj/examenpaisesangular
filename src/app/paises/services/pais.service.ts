import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,  } from 'rxjs';
import { Country } from '../interfaces/pais.interfaces';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = environment.baseUrl;
  
  get httpParams() { 
    return new HttpParams().set('fields', 'name,region,subregion,capital,cca2,flags,population');
  }
  
  constructor(private http: HttpClient) { }
  
  buscarPais(termino: string): Observable<Country[]> { 
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url, { params: this.httpParams});
  }
  getPais(): Observable<Country[]> { 
    const url = `${this.apiUrl}/all`;
   return this.http.get<Country[]>(url,{ params: this.httpParams})
  }

  guardarPais(pais: Country) {
    const paisesFavoritos: Country[] = JSON.parse(localStorage.getItem('paisesFavoritos') || '[]'); 
    paisesFavoritos.push(pais);
    localStorage.setItem('paisesFavoritos', JSON.stringify(paisesFavoritos));
  }

  getPaisesFavoritos(): Country[] {
    const paisesFavoritosString = localStorage.getItem('paisesFavoritos');
    return paisesFavoritosString ? JSON.parse(paisesFavoritosString) : [];
  }
}
