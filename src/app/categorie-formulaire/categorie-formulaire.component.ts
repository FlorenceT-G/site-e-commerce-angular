import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from '../models/Categorie.model';
import { CategoriesService } from '../service/categories.service';

@Component({
  selector: 'app-categorie-formulaire',
  templateUrl: './categorie-formulaire.component.html',
  styleUrls: ['./categorie-formulaire.component.scss']
})
export class CategorieFormulaireComponent implements OnInit {

  categorie!:Categorie
  constructor(private router:Router, private cService:CategoriesService) {}

  ngOnInit(): void {
    this.categorie = new Categorie()
  }

  save() {
    console.log(this.categorie.desc)
    this.cService.ajouterCategorie(this.categorie).subscribe(
      res => {this.goToGestionCategorie()}
    )
  }

  goToGestionCategorie() {
    this.router.navigateByUrl("administration/gestioncategories")
  }

}
