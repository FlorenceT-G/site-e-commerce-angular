import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorie } from '../models/Categorie.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  url!: string
  constructor(private http:HttpClient) {
    this.url = "http://localhost:8015/api/categories"
   }

   getAllCategories() {
    return this.http.get<Categorie[]>(this.url)
   }

   getCategorieById(id:number) {
    return this.http.get<Categorie>(this.url + "/" + id)
   }

   ajouterCategorie(c:Categorie) {
    return this.http.post<Categorie>(this.url, c)
   }

   supprimerCategorie(id:number) {
    return this.http.delete(this.url + "/" + id)
   }

   modifierCategorie(c:Categorie) {
    return this.http.put<Categorie>(this.url, c)
   }
}


