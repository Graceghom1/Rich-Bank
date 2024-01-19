import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Account } from './classes/account';
import { ApiService } from './services/api.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  accounts : Account[] = [];

  constructor(private apiService : ApiService){}

  addAccount(account : Account) {
    this.accounts.push(account);
    this.apiService.createAccount(account.amount,account.label);
  }

  allUserAccounts(){
    //this.apiService.getAccounts();
    return this.accounts =  [...this.apiService.sendAccounts()]
  }
  


}
