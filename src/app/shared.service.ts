import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Account } from './classes/account';
import { ApiService } from './services/api.service';
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

  constructor(private apiService : ApiService){}

  addAccount(account : Account) {
    this.accounts.push(account);

    this.apiService.createAccount(account.amount,account.label);
  }

  allUserAccounts(){
    return this.accounts =  [...this.apiService.sendAccounts()]
    this.router.navigate(["/detail"])
  }
  


}
