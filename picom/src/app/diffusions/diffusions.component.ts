import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../service/navbar.service';

@Component({
  selector: 'app-diffusions',
  templateUrl: './diffusions.component.html',
  styleUrls: ['./diffusions.component.css']
})
export class DiffusionsComponent implements OnInit {

  constructor(public nav : NavbarService) { }

  ngOnInit(): void {
    this.nav.show();
  }

}
