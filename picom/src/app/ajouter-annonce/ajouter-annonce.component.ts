import { Component, Input, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AnnonceDto } from '../model/annonce-dto';
import tinymce from 'tinymce';
import { NavbarService } from '../service/navbar.service';
import { AnnoncesService } from '../service/annonces.service';
import { filter } from 'rxjs';
@Component({
  selector: 'app-ajouter-annonce',
  templateUrl: './ajouter-annonce.component.html',
  styleUrls: ['./ajouter-annonce.component.css'],
})
export class AjouterAnnonceComponent implements OnInit {
  @Input()
  AnnonceForm = new AnnonceDto();

  ListTrancheHoraires: any = [];
  ListTrancheHorairesCheckedZone1: any = [];
  ListTrancheHorairesCheckedZone2: any = [];
  ListTrancheHorairesCheckedZone3: any = [];
  ListTrancheHorairesCheckedZone4: any = [];
  ListTrancheHorairesCheckedZone5: any = [];
  TrancheHorairesId: any = [];

  ListZones: any = [];
  ListZonesChecked: any = [];
  timeIntevalSeconds = 1;

  contentZone1: boolean = false;
  contentZone2: boolean = false;
  contentZone3: boolean = false;
  contentZone4: boolean = false;
  contentZone5: boolean = false;

  zone1Checkboxes: any;
  zone1checked: boolean[] = [];

  array: HTMLInputElement[] = [];

  constructor(
    public service: AnnoncesService,
    public router: Router,
    public nav: NavbarService
  ) {}

  ngOnInit(): void {
    this.nav.show();
    this.loadTrancheHoraires();
    this.loadZones();
    this.calcultMontant();
    setInterval(() => {
      this.calcultMontant();
    }, this.timeIntevalSeconds * 3000);

    this.addEventOncheckboxes();

    // setTimeout(() => {
    //  this.fetchPriceByZone();
    // }, 5000);


  }

  loadTrancheHoraires() {
    return this.service.getTrancheHoraires().subscribe((data) => {
      console.log(data);
      this.ListTrancheHoraires = data;
    });
  }

  loadZones() {
    return this.service.getZones().subscribe((data) => {
      //console.log(data);
      this.ListZones = data;
    });
  }

  getSelectedCheckboxListTrancheHorairesZone1() {
    this.ListTrancheHorairesCheckedZone1 = this.ListTrancheHoraires.filter(
      (item: { checked: any }) => item.checked

    );
    console.log(this.ListTrancheHorairesCheckedZone1);
    return this.ListTrancheHorairesCheckedZone1;
  }

  get selectedCheckboxListTrancheHorairesZone2() {
    this.ListTrancheHorairesCheckedZone2 = this.ListTrancheHoraires.filter(
      (item: { checked: any }) => item.checked
    );
    return this.ListTrancheHorairesCheckedZone2;
  }

  get selectedCheckboxListTrancheHorairesZone3() {
    this.ListTrancheHorairesCheckedZone3 = this.ListTrancheHoraires.filter(
      (item: { checked: any }) => item.checked
    );
    return this.ListTrancheHorairesCheckedZone3;
  }

  get selectedCheckboxListTrancheHorairesZone4() {
    this.ListTrancheHorairesCheckedZone4 = this.ListTrancheHoraires.filter(
      (item: { checked: any }) => item.checked
    );
    return this.ListTrancheHorairesCheckedZone4;
  }

  get selectedCheckboxListTrancheHorairesZone5() {
    this.ListTrancheHorairesCheckedZone5 = this.ListTrancheHoraires.filter(
      (item: { checked: any }) => item.checked
    );
    return this.ListTrancheHorairesCheckedZone5;
  }

  addEventOncheckboxes(){
    this.zone1Checkboxes = document.querySelectorAll('.zone1');
    this.zone1Checkboxes.forEach((element: HTMLInputElement) =>  element.addEventListener('click', this.toggleZone1.bind(this)));
  }

  toggleZone1(event: any){

    this.zone1Checkboxes = document.querySelectorAll('.zone1');
    const inputZone1 = document.getElementById('1') as HTMLInputElement;
    //console.log(inputZone1);
    //console.log(this.zone1Checkboxes);
    this.zone1Checkboxes.forEach((element: HTMLInputElement) => {
      if(event.target == inputZone1){
          (element as HTMLInputElement).checked = !(element as HTMLInputElement).checked;
          //console.log('this.array DANS LE IF', this.array)
          //this.array.push(element);
      } else if(event){
        console.log('element.checked---------' , element.checked);
        console.log('event.target-------', event.target);
        //console.log('this.array DANS LE ELSE', this.array)
        this.array.push(event.target);
          // this.zone1Checkboxes.forEach((element: HTMLInputElement) => {
          //   if ((element as HTMLInputElement).checked){
          //     console.log('this.array DANS LE ELSE' , this.array)
          //     return this.array.push(element);
          //   };
          // })
        };
    })
    console.log('this.array', this.array);
  }

      // const checked = this.zone1Checkboxes.filter((element: HTMLInputElement) => element.checked );

      // console.log(checked);




  fetchPriceByZone(){
    console.log('from fetchPriceByZone', this.array);
    //console.log('array from fetchPriceByZone', this.array);
    // for (let i ; i < (this.zone1checked.length) -1; i++) {
    //   this.zone1checked.forEach(element => {
    //     //console.log(element[i])
    //   });
  }

  toggleZone2(event: any) {
    if (event) {
      //this.contentZone2 = true;
      //this.ListZonesChecked[1] = 2;
      const zone2Checkboxes = document.querySelectorAll('#zone2');
      zone2Checkboxes.forEach(element => {
        (element as HTMLInputElement).checked = !(element as HTMLInputElement).checked;
      })
    }
  }
  toggleZone3(event: any) {
    if (event.target.checked) {
      console.log(event.target.checked);
      this.contentZone3 = true;
      this.ListZonesChecked[2] = 3;
    }
  }
  toggleZone4(event: any) {
    if (event.target.checked) {
      this.contentZone4 = true;
      this.ListZonesChecked[3] = 4;
    }
  }
  toggleZone5(event: any) {
    if (event.target.checked) {
      this.contentZone5 = true;
      this.ListZonesChecked[4] = 5;
    }
  }

  calcultMontant() {
    for (let y = 0; y < this.ListTrancheHorairesCheckedZone1.length; y++) {
      this.TrancheHorairesId[y] = this.ListTrancheHorairesCheckedZone1[y].id;
    }
  }

  onSubmit() {
    this.AnnonceForm.contenu = tinymce.activeEditor.getContent();
    this.AnnonceForm.idClient = 1;
    this.AnnonceForm.idZoneAnnonce = this.ListZonesChecked;
    this.AnnonceForm.idTrancheHoraireAnnonce = this.TrancheHorairesId;
    this.service.addAnnonce(this.AnnonceForm).subscribe((data: {}) => {
      console.log(data);
    });
    window.location.reload();
  }
}
