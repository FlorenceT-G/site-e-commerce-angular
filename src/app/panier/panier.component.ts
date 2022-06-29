import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {

  stringPanier:any
  objetPanier:any
  PanierValid = false

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.stringPanier = sessionStorage.getItem("panier")
    if(this.stringPanier != null) {
      this.PanierValid = true
      this.objetPanier = JSON.parse(this.stringPanier)
    }

   console.log(this.objetPanier)
  }

  goToAccueil() {
    this.router.navigateByUrl("")
  }

  passerCommande() {
    
  }

}
