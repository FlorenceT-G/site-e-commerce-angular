import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logup',
  templateUrl: './logup.component.html',
  styleUrls: ['./logup.component.scss']
})
export class LogupComponent implements OnInit {

  valid = true
  errormessage = "Nom d'utilisateur et/ou email déjà utilisé"
  constructor() { }

  ngOnInit(): void {
  }

}
