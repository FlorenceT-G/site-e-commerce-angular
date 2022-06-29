import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/Product.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  url!: string

  p!:Product

  constructor(private http:HttpClient) {
    this.url = "http://localhost:8015/api/produits"
   }

  getAllProduits() {
    return this.http.get<Product[]>(this.url)
  }

  getProduitById(id:number) {
    this.http.get<Product>(this.url + "/" + id).subscribe(
      res => {
        this.p = res
      }
    )
    console.log(this.p)
    return this.p
  }

  ajouter(p:Product) {
    console.log(p)
    return this.http.post<Product>(this.url, p)
  }

  modifier(p:Product) {
    return this.http.put<Product>(this.url, p)
  }

  uploadFile(data:FormData) {
    return this.http.post(this.url + "/uploadFile", data)
  }

  delete(id:number) {
    return this.http.delete(this.url + '/' + id)
  }

}
