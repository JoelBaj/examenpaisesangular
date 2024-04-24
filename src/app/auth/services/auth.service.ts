import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = false;

  constructor() {
    this.loggedIn = !!localStorage.getItem('token');
  }

  login(username: string, password: string): Observable<boolean> {
    this.loggedIn = username === 'admin' && password === 'admin';
    if (this.loggedIn) {
      localStorage.setItem('token', 'joelbajanaGalarza');
    }
    
    return of(this.loggedIn);
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  logout(): void {
    localStorage.removeItem('token');
    this.loggedIn = false;
  }
  islogged(): boolean { 
    return localStorage.getItem('token') ? true : false;
  }
}
