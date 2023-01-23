export class AnnonceDto {

  id: number = 0;
  dateHeureCreation: Date = new Date();
  dateHeureDebut: Date = new Date();
  dateHeureFin: Date = new Date();
  contenu: string = "";
  numeroDeCarte: string = "";
  anneeExpiration: number=0;
  moisExpiration: number=0;
  cryptogramme: string = "";
  montantRegleEnEuros: number = 0;
  idClient: number=0;
  idZoneAnnonce: number[] = [];
  idTrancheHoraireAnnonce: number[] = [];
}
