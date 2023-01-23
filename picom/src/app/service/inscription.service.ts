import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Client } from '../model/client';
import { ClientDto } from '../model/client-dto';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  endpoint = 'http://localhost:8180/';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
         'Content-Type': 'application/json',
         'Access-Control-Allow-Origin' : '*',
         'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
    })
}

  addClient(client:ClientDto):Observable<any>{
    return this.http.post<any>(this.endpoint + 'api/addClient', JSON.stringify(client), this.httpOptions)
    .pipe(
        catchError(this.handleError)
    )
  }

  handleError(error:any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
        errorMessage = error.error.message;
    } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => new Error(errorMessage));
  }

}
