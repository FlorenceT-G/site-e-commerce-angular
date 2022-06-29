import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from '../models/Categorie.model';
import { Product } from '../models/Product.model';
import { CategoriesService } from '../service/categories.service';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-gestion-produits',
  templateUrl: './gestion-produits.component.html',
  styleUrls: ['./gestion-produits.component.scss']
})
export class GestionProduitsComponent implements OnInit {

  lCategories!: Categorie[]
  lProduits!: Product[]
  acces = "/home/florence/Documents/workspace-spring-tool-suite-4-4.14.1.RELEASE/AEC_API/src/main/resources/static"
  constructor(private cService:CategoriesService, private pService:ProduitService, private router:Router, private http:HttpClient) { }

  ngOnInit(): void {
    this.cService.getAllCategories().subscribe(
      results => {this.lCategories = results}
    )
    this.pService.getAllProduits().subscribe(
      list => {this.lProduits = list}
    )
  }

  goAjoutProduit() {
    this.router.navigateByUrl("administration/ajouterproduit")
  }
  goToModifier(idProduit:number) {
    this.router.navigateByUrl("administration/modifierproduit/" + idProduit)
  }
  supprimer(id:number) {
    this.pService.delete(id).subscribe(result => this.goToGestionPage())
  }

  goToGestionPage() {
    this.router.navigateByUrl('administration/gestionproduits')
  }
}
