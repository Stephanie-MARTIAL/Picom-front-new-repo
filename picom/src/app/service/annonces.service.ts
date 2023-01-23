import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Annonce } from '../model/annonce';
import { AnnonceDto } from '../model/annonce-dto';
import { Tarif } from '../model/tarif';
import { TrancheHoraire } from '../model/tranche-horaire';

@Injectable({
  providedIn: 'root'
})

export class AnnoncesService {

  endpoint = 'http://localhost:8180/';

  constructor(private http: HttpClient) { }

   httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
      })
  }

  getAnnonce(id:number): Observable<any>{
    return this.http.get<Annonce>(this.endpoint+'api/annonces/'+1, this.httpOptions)
    .pipe(
        catchError(this.handleError)
    )
  }

  getAllAnnonces(): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(this.endpoint+'api/annonces', this.httpOptions)
    .pipe(
        catchError(this.handleError)
    )
  }

  getTrancheHoraires():Observable<any>{
    return this.http.get<TrancheHoraire[]>(this.endpoint + 'api/trancheHoraires', this.httpOptions)
    .pipe(
        catchError(this.handleError)
    )
  }

  getZones():Observable<any>{
    return this.http.get<Zone[]>(this.endpoint + 'api/zones', this.httpOptions)
    .pipe(
        catchError(this.handleError)
    )
  }

  addAnnonce(annonce:AnnonceDto):Observable<any>{
    return this.http.post<Annonce>(this.endpoint + 'api/addAnnonce' , JSON.stringify(annonce), this.httpOptions)
    .pipe(
        catchError(this.handleError)
    )
  }
  getTarifByTrancheHoraire():Observable<any>{
    return this.http.get<Tarif[]>(this.endpoint + 'api/tarif?idTrancheHoraire=?&idZone=?', this.httpOptions)
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
