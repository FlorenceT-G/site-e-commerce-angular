import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Categorie } from '../models/Categorie.model';
import { CategoriesService } from '../service/categories.service';

@Component({
  selector: 'app-gestion-categories',
  templateUrl: './gestion-categories.component.html',
  styleUrls: ['./gestion-categories.component.scss']
})
export class GestionCategoriesComponent implements OnInit {

  lCategories!: Categorie[]
  constructor(private cService:CategoriesService, private router:Router) { }

  ngOnInit(): void {
    this.cService.getAllCategories().subscribe(
      list => {this.lCategories = list}
    )
  }

  chargerCategories() {
    this.cService.getAllCategories().subscribe()
  }

  goToNouvelleCategorie() {
    this.router.navigateByUrl("administration/nouvellecategorie")
  }

  modifier(id:number) {
    this.router.navigateByUrl("administration/modifiercategorie/" +id)
  }

  supprimer(id:number) {
    this.cService.supprimerCategorie(id).subscribe(
      res => {this.chargerCategories()}
    )
  }

  goToGestionCategories() {
    this.router.navigateByUrl("administration/gestioncategories")
  }

}
