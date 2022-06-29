import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { ListeCategoriesComponent } from './liste-categories/liste-categories.component';
import { HttpInterceptorBasicAuthenticationService } from './service/http-interceptor-basic-authentication.service';
import { AdministrationComponent } from './administration/administration.component';
import { GestionProduitsComponent } from './gestion-produits/gestion-produits.component';
import { GestionCategoriesComponent } from './gestion-categories/gestion-categories.component';
import { LogupComponent } from './logup/logup.component';
import { ProduitFormulaireComponent } from './produit-formulaire/produit-formulaire.component';
import { ModifierProduitComponent } from './modifier-produit/modifier-produit.component';
import { ModifierCategorieComponent } from './modifier-categorie/modifier-categorie.component';
import { CategorieFormulaireComponent } from './categorie-formulaire/categorie-formulaire.component';
import { GestionCommandesComponent } from './gestion-commandes/gestion-commandes.component';
import { PanierComponent } from './panier/panier.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccueilComponent,
    HeaderComponent,
    FooterComponent,
    ListeProduitsComponent,
    ListeCategoriesComponent,
    AdministrationComponent,
    GestionProduitsComponent,
    GestionCategoriesComponent,
    LogupComponent,
    ProduitFormulaireComponent,
    ModifierProduitComponent,
    ModifierCategorieComponent,
    CategorieFormulaireComponent,
    GestionCommandesComponent,
    PanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:HttpInterceptorBasicAuthenticationService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
