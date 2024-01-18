import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Account } from './classes/account';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  accounts : Account[] = [];

  addAccount(account : Account) {
    this.accounts.push(account);
  }

  constructor() { }
}
