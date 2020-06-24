import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private afAuth: AngularFireAuth ) {}

  login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.signInWithRedirect(provider);
  }


}