import { HttpClient } from '@angular/common/http';
import { NONE_TYPE } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, empty, map, Observable } from 'rxjs';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  //https://jasonwatmore.com/fr/post/2019/06/10/angular-8-tutoriel-et-exemple-sur-lenregistrement-et-lauthentification-des-utilisateurs

  // private currentUserSubject!: BehaviorSubject<User>;
  public currentUser!: Observable<User>;

  constructor(private http: HttpClient, private router: Router) { }

  authentication(username: string, password: string) {
    console.log("authentication : " + username + " " + password)
    return this.http.post<any>("http://localhost:8015/authenticate", { username, password })
  }

  getAuthenticatedUser(username:string) {
    return this.http.get<User>("http://localhost:8015/api/users/" + username)
  }

  logout() {
    sessionStorage.removeItem('token')
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
  }

}
