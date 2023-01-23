import { Administrateur } from "./administrateur";
import { Zone } from "./zone";
import { TrancheHoraire } from './tranche-horaire';

export class Tarif {

  id: number = 0;
  prixEnEuros: number = 0;
  administrateur: Administrateur = new Administrateur();
  zone: Zone = new Zone();
  tranchesHoraire: TrancheHoraire = new TrancheHoraire();
}
