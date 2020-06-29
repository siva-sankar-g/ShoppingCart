
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent  {

  appUser : any;

  constructor(public auth : AuthService ) { 
    auth.appUser$.subscribe( appuser => this.appUser = appuser )
  }

  logout() {
    this.auth.logout()
  }

}
