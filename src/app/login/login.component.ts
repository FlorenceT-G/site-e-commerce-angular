import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User.model';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials = {username:'', password:''}
  validUser = true
  errormessage = "identifiant et/ou mot-de-passe incorrect"

  constructor(private basicAuth:BasicAuthenticationService, private router:Router, private http:HttpClient) { }

  ngOnInit(): void {
  }

  valider() {
    console.log(this.credentials)
    this.basicAuth.authentication(this.credentials.username, this.credentials.password)
    .subscribe(
      data => {
        sessionStorage.setItem('token', 'Bearer' + data.jwt);
        this.validUser = true;
        this.basicAuth.getAuthenticatedUser(this.credentials.username).subscribe (
          user => {sessionStorage.setItem('user', JSON.stringify(user));}
        )
        this.router.navigateByUrl('');
      },
      error => {
        console.log("c'est une erreur !")
        this.validUser = false;
      })
  }

}
