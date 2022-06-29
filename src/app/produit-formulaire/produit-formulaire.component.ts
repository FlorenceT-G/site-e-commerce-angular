import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../models/Categorie.model';
import { Product } from '../models/Product.model';
import { CategoriesService } from '../service/categories.service';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-produit-formulaire',
  templateUrl: './produit-formulaire.component.html',
  styleUrls: ['./produit-formulaire.component.scss']
})
export class ProduitFormulaireComponent implements OnInit {

  produit!:Product
  lCategories!:Categorie[]
  selectedFile!:File
  selectedValue!: Categorie

  constructor(private router:Router, private pService:ProduitService, private cService:CategoriesService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.produit = new Product()
    this.cService.getAllCategories().subscribe(
      liste => {this.lCategories = liste}
    )
  }

  selectEvent(event: any): void {
    this.selectedFile = event.target.files[0]
  }

  save() {
    let formData = new FormData;
    formData.append('File', this.selectedFile)
    this.pService.uploadFile(formData).subscribe(
      res => console.log("ok")
    )
    this.produit.img = "img/produits/" + this.selectedFile.name
    this.pService.ajouter(this.produit).subscribe(
      res => {this.goToGestionProduit()}
    )
  }

  goToGestionProduit() {
    this.router.navigateByUrl("administration/gestionproduits")
  }
}
