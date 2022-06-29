import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '../models/Cart.model';
import { CartLine } from '../models/CartLine.model';
import { Product } from '../models/Product.model';
import { ProduitService } from './produit.service';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  url = "http://localhost:8015/api/panier"
  produit!:Product
  panier = new Cart([])

  constructor(private http:HttpClient, private produitService:ProduitService) { }

  creerPanier(idProd:number, qte:number) {
    return this.http.post("http://localhost:8015/api/panier", {idProd, qte})
  }

  nouveauPanier(idProd:number, qte:number) {
    this.produit = this.produitService.getProduitById(idProd)

    let _p = sessionStorage.getItem("panier")
    if(_p == null) {
      let cl = new CartLine(this.produit, qte)
      this.panier.lCartLines.push(cl);
    } else {
      this.panier = JSON.parse(_p)
      let produitTrouve = false;
      let cartline!:CartLine
      for(let i = 0 ; i < this.panier.lCartLines.length ; i++) {
        if(this.panier.lCartLines[i].p.idProduct == idProd) {
          this.panier.lCartLines[i].qty += 1
          produitTrouve = true
        }
      }
      if(!produitTrouve) {
        let cl = new CartLine(this.produit, qte); 
        this.panier.lCartLines.push(cl)
      }
    }

    return this.panier;
  }

}
