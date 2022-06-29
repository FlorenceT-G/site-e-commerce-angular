import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../models/Cart.model';
import { Categorie } from '../models/Categorie.model';
import { Product } from '../models/Product.model';
import { PanierService } from '../service/panier.service';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  lProduits!: Product[]
  panier = new Cart([])

  constructor(private service:ProduitService, private panierService:PanierService, private router:Router) { }

  ngOnInit(): void {
    this.service.getAllProduits().subscribe(
      result => {this.lProduits = result}
    )
  }

  ajoutPanier(id:number) {
    console.log(id)
    this.panier = this.panierService.nouveauPanier(id, 1);
    sessionStorage.setItem("panier", JSON.stringify(this.panier))
  }

  chargerPage() {
    this.router.navigateByUrl("")
  }

}
