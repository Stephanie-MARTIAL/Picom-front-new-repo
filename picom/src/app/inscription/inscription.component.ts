import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientDto } from '../model/client-dto';
import { InscriptionService } from '../service/inscription.service';
import { NavbarService } from '../service/navbar.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {


  @Input()
  clientForm = new ClientDto();

  constructor(public service: InscriptionService,
    public router: Router,
    private activatedRoute: ActivatedRoute,
    public nav : NavbarService
    ) { }

  ngOnInit(): void {
    this.nav.show();
  }

  onSubmit() {
    console.log(this.clientForm);
    this.service.addClient(this.clientForm).subscribe((data: {}) => { console.log(data);

    });
  }
}
