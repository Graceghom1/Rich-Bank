import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [],
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})

export class AccueilComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {

  }

  ouvrirNouveauCompte(){
    this.router.navigate(['new-account']);
  }

}
