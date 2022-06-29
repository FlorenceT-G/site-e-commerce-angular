import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product.model';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.scss']
})
export class ListeProduitsComponent implements OnInit {

  lProduits!: Product[]
  constructor(private service:ProduitService) { }

  ngOnInit(): void {
    this.service.getAllProduits().subscribe(
      result => {this.lProduits = result}
    )
  }

  

}
