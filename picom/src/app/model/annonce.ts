import { Client } from "./client";

export class Annonce {

  id: number = 0;
  dateHeureCreation: Date = new Date();
  dateHeureDebut: Date = new Date();
  dateHeureFin: Date = new Date();
  contenu: string = "";
  numeroDeCarte: number = 0;
  anneeExpiration: string="";
  moisExpiration: string="";
  cryptogramme: string = "";
  montantRegleEnEuros: number = 0;
  client: Client = new Client();
  zones: string[] = [];
  tranchesHoraires: string[] = [];
}
