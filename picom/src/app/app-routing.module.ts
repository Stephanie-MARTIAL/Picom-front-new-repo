import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AdministrationComponent } from './administration/administration.component';
import { AjouterAnnonceComponent } from './ajouter-annonce/ajouter-annonce.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ModifierAnnonceComponent } from './modifier-annonce/modifier-annonce.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo: 'connexion'},
  {path:'connexion', component: AccueilComponent},
  {path:'deconnexion', pathMatch:'full', redirectTo: 'connexion'},
  {path:'inscription', component: InscriptionComponent},
  {path:'annonces-liste', component: AnnonceComponent},
  {path:'ajouter-annonce', component:AjouterAnnonceComponent},
  {path:'modifier-annonce', component:ModifierAnnonceComponent},
  {path:'administration', component: AdministrationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
