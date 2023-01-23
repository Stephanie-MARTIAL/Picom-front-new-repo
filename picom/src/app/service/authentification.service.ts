import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from '../model/utilisateur';
import { UtilisateurDto } from '../model/utilisateur-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  endpoint = 'http://localhost:8180/';

  constructor(private client: HttpClient) { }

   httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
      })
  }

  //methode qui permet de récupérer l'utilisateur
  getUtilisateur(utilisateurDto: UtilisateurDto): Observable<any>{
    return this.client.get<Utilisateur>(this.endpoint+'api/login');
  }
}
