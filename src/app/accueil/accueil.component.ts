import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { SharedService } from 'app/shared.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})

export class AccueilComponent implements OnInit {

  
  accounts =  this.sharedService.accounts;

  constructor(private router: Router, private sharedService : SharedService ) { }

  ngOnInit(): void {

  }

  ouvrirNouveauCompte() {
    // Utilisez le service Router pour naviguer vers la page NewAccount
    this.router.navigate(['/new-account']);
  }
  envoieargent(){
    this.router.navigate(['/sendmoney-page']);
  }

}
