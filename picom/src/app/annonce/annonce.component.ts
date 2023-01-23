import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnoncesService } from '../service/annonces.service';
import { NavbarService } from '../service/navbar.service';


@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {

  annoncesList: any = [];
  annonce: any = {};


  id = this.activatedRoute.snapshot.params['id'];

  constructor(public service: AnnoncesService, private activatedRoute: ActivatedRoute, private router: Router, public nav : NavbarService) { }

  loadAnnonces(){
    return this.service.getAllAnnonces().subscribe((data: {}) => {
      console.log(data);
      this.annoncesList = data;
    })
  }

  loadAnnonce(){
    return this.service.getAnnonce(this.id).subscribe((data: {}) => {
      console.log(data);
      this.annonce = data;
    })
  }

  ngOnInit(): void {
    this.nav.show();
    this.loadAnnonces();
  }

}
