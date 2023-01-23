import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { TrancheHoraire } from '../model/tranche-horaire';
import { Tarif } from '../model/tarif';
import { TarifDto } from '../model/tarif-dto';

@Injectable({
  providedIn: 'root'
})
export class AdministrationService {

  endpoint = 'http://localhost:8180/';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
         'Content-Type': 'application/json',
         'Access-Control-Allow-Origin' : '*',
         'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
    })
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

  getTarifs():Observable<any>{
    return this.http.get<Tarif[]>(this.endpoint + 'api/ListTarif', this.httpOptions)
    .pipe(
        catchError(this.handleError)
    )
  }

  deleteTarif(id:any) {
    return this.http.delete<Tarif>(this.endpoint + 'api/deleteTarif' + id, this.httpOptions)
        .pipe(
            catchError(this.handleError)
        )
  }

  addTarif(tarif:TarifDto):Observable<any>{
    return this.http.post<Tarif>(this.endpoint + 'api/addTarif' , JSON.stringify(tarif), this.httpOptions)
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
