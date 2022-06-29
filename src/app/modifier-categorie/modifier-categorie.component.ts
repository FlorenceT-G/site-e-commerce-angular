import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../models/Categorie.model';
import { CategoriesService } from '../service/categories.service';

@Component({
  selector: 'app-modifier-categorie',
  templateUrl: './modifier-categorie.component.html',
  styleUrls: ['./modifier-categorie.component.scss']
})
export class ModifierCategorieComponent implements OnInit {

  categorie!: Categorie
  constructor(private route:ActivatedRoute, private cService:CategoriesService, private router:Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    this.cService.getCategorieById(id).subscribe(
      res => {this.categorie = res}
    )
  }

  save() {
    this.cService.modifierCategorie(this.categorie).subscribe(
      res => this.goToGestionCategorie()
    )
  }

  goToGestionCategorie() {
    this.router.navigateByUrl("administration/gestioncategories")
  }

}
