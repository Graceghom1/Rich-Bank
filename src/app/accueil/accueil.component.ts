import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { SharedService } from 'app/shared.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})

export class AccueilComponent implements OnInit {

  transacs : any[] = []
  now = Date.now()
  all = 0
date: any;


  accounts =  this.sharedService.accounts;

  constructor(private router: Router, private sharedService : SharedService ) { }

  ngOnInit(): void {
    this.transacs = this.sharedService.transacs
  for(let t of this.transacs) {
    this.all += t.amount
  }

  }

  ouvrirNouveauCompte() {
    // Utilisez le service Router pour naviguer vers la page NewAccount
    this.router.navigate(['/new-account']);
  }
  ouvrirDetail() {
    // Utilisez le service Router pour naviguer vers la page NewAccount
    this.router.navigate(['/detail']);
  }
  envoieargent(){
    this.router.navigate(['/sendmoney-page']);
  }

}
