import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { Account } from 'app/classes/account';
import { ApiService } from 'app/services/api.service';
import { SharedService } from 'app/shared.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})

export class AccueilComponent implements OnInit {

  //selectedLabel: string = "";
  accounts: Account[] = [];

  constructor(private router: Router, public apiService: ApiService, private sharedService : SharedService) { }

  ngOnInit() {
    console.log('init')
    console.log(this.accounts)
    this.accounts = [...JSON.parse(localStorage.getItem('accounts') || '{}')]
    console.log(this.accounts)
    ngOnInit(): void {
    this.transacs = this.sharedService.transacs
  for(let t of this.transacs) {
    this.all += t.amount
  }

  transacs : any[] = []
  now = Date.now()
  all = 0
date: any;

  accounts =  this.sharedService.accounts;


  ouvrirNouveauCompte() {
    //console.log(this.accounts)
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
