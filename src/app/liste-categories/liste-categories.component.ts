import { Component, OnInit } from '@angular/core';
import { Categorie } from '../models/Categorie.model';
import { CategoriesService } from '../service/categories.service';

@Component({
  selector: 'app-liste-categories',
  templateUrl: './liste-categories.component.html',
  styleUrls: ['./liste-categories.component.scss']
})
export class ListeCategoriesComponent implements OnInit {

  lCategories!: Categorie[]
  constructor(private service:CategoriesService) { }

  ngOnInit(): void {
    this.service.getAllCategories().subscribe(
      result => {this.lCategories = result}
    )
  }

}
