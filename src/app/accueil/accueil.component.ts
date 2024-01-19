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

  constructor(private router: Router, public apiService: ApiService) { }

  ngOnInit() {
    console.log('init')
    console.log(this.accounts)
    this.accounts = [...JSON.parse(localStorage.getItem('accounts') || '{}')]
    console.log(this.accounts)
  }

  ouvrirNouveauCompte() {
    //console.log(this.accounts)
    this.router.navigate(['/new-account']);
  }

}
