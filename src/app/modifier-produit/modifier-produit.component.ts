import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../models/Categorie.model';
import { Product } from '../models/Product.model';
import { CategoriesService } from '../service/categories.service';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-modifier-produit',
  templateUrl: './modifier-produit.component.html',
  styleUrls: ['./modifier-produit.component.scss']
})
export class ModifierProduitComponent implements OnInit {

  produit = new Product()
  lCategories!:Categorie[]
  selectedFile!:File
  selectedValue!: Categorie

  constructor(private router:Router, private pService:ProduitService, private cService:CategoriesService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.cService.getAllCategories().subscribe(
      liste => {this.lCategories = liste}
    )
    const id = this.route.snapshot.params['id']
    this.produit = this.pService.getProduitById(id)
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
    this.pService.modifier(this.produit).subscribe(
      res => {this.goToGestionProduit()}
    )
  }

  goToGestionProduit() {
    this.router.navigateByUrl("administration/gestionproduits")
  }

}
