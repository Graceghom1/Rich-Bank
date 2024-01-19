import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Account } from './classes/account';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  accounts : Account[] = [];
  transacs : any[] = []

  constructor(private router: Router) {

  }

  addTransac(transac : any) {
    console.log(transac)
    this.transacs.push(transac)
  }

  addAccount(account : Account) {
    this.accounts.push(account);
    this.router.navigate(["/detail"])
  }

}
