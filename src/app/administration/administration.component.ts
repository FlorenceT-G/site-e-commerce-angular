import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goCategoriePage() {
    this.router.navigateByUrl("administration/gestioncategories")
  }
  goProduitsPage() {
    this.router.navigateByUrl("administration/gestionproduits")
  }
}
