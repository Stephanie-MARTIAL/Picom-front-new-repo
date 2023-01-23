import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from '../service/authentification.service';
import { UtilisateurDto } from '../model/utilisateur-dto';
import { NavbarService } from '../service/navbar.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  @Input()
  authenticationForm = new UtilisateurDto ();

  constructor(private service: AuthentificationService, private activatedRoute: ActivatedRoute, private router: Router, public nav : NavbarService) { }


  ngOnInit(): void {
    this.nav.hide();
  }

  onSubmit() {

    this.service.getUtilisateur(this.authenticationForm).subscribe((data: {}) => { console.log(data);

    });
  }

}
