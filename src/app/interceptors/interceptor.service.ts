import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Paso por el interceptor');
    
    let clonedRequest = req;
    if (localStorage.getItem('joelbajanaGalarza')) { 
      clonedRequest = req.clone({
        setHeaders: {
          Authorization: localStorage.getItem('joelbajanaGalarza')!
        }
      })
    }
      
    return next.handle(clonedRequest).pipe(
       catchError(this.manejarError)
    );
  }
  manejarError(error: HttpErrorResponse) { 
    console.log('sucedio un error en la solicitud');
    console.warn(error); 
    return throwError(error)
  }
}
