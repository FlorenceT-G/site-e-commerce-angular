import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AdministrationComponent } from './administration/administration.component';
import { CategorieFormulaireComponent } from './categorie-formulaire/categorie-formulaire.component';
import { GestionCategoriesComponent } from './gestion-categories/gestion-categories.component';
import { GestionProduitsComponent } from './gestion-produits/gestion-produits.component';
import { LoginComponent } from './login/login.component';
import { LogupComponent } from './logup/logup.component';
import { ModifierCategorieComponent } from './modifier-categorie/modifier-categorie.component';
import { ModifierProduitComponent } from './modifier-produit/modifier-produit.component';
import { PanierComponent } from './panier/panier.component';
import { ProduitFormulaireComponent } from './produit-formulaire/produit-formulaire.component';

const routes: Routes = [
  {path: "", component:AccueilComponent},
  {path: "connexion", component:LoginComponent},
  {path: "inscription", component:LogupComponent},
  {path: "administration", component:AdministrationComponent},
  {path: "administration/gestionproduits", component:GestionProduitsComponent},
  {path: "administration/ajouterproduit", component:ProduitFormulaireComponent},
  {path: "administration/modifierproduit/:id", component:ModifierProduitComponent},
  {path: "administration/gestioncategories", component:GestionCategoriesComponent},
  {path: "administration/nouvellecategorie", component:CategorieFormulaireComponent},
  {path: "administration/modifiercategorie/:id", component:ModifierCategorieComponent},
  {path: "panier", component:PanierComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
