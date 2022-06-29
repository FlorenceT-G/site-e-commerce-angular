import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from '../models/Categorie.model';
import { User } from '../models/User.model';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { CategoriesService } from '../service/categories.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  lCategories!: Categorie[]
  stringObject:any
  user:any
  stringpanier:any
  objectPanier:any
  ValidUser=false
  ValidPanier=false

  constructor(private service:CategoriesService, private router:Router, private authService:BasicAuthenticationService) { }

  ngOnInit(): void {
    this.service.getAllCategories().subscribe(
      result => {this.lCategories = result}
    )

    this.user = sessionStorage.getItem("user")
    if(this.user != null) {
      this.ValidUser=true
      this.stringObject = JSON.parse(this.user)
    }

    this.stringpanier = sessionStorage.getItem("panier")
    if(this.stringpanier != null)
    {
      this.ValidPanier = true
      this.objectPanier = JSON.parse(this.stringpanier)
    }
    
  }

  redirection() {
    this.router.navigateByUrl("")
  }

  getInscrPage() {
    this.router.navigateByUrl("inscription")
  }
  getCoPage() {
    this.router.navigateByUrl("connexion")
  }

  goToAdministrationPage() {
    this.router.navigateByUrl("administration")
  }

  goToCategorie(id:number) {
    
  }

  goToPanier() {
    this.router.navigateByUrl("panier")
  }

  deconnexion() {
    console.log("ok")
    this.authService.logout()
    this.redirection()
  }

}
