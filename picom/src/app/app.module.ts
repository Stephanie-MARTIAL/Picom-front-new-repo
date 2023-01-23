import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';

// import des composants
import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { DiffusionsComponent } from './diffusions/diffusions.component';
import { AjouterAnnonceComponent } from './ajouter-annonce/ajouter-annonce.component';
import { AdministrationComponent } from './administration/administration.component';
import { ModifierAnnonceComponent } from './modifier-annonce/modifier-annonce.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    InscriptionComponent,
    AccueilComponent,
    AnnonceComponent,
    DiffusionsComponent,
    AjouterAnnonceComponent,
    AdministrationComponent,
    ModifierAnnonceComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    EditorModule
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
