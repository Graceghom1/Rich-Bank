import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from 'app/classes/account';
import { SharedService } from 'app/shared.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent  {
  account  : Account = {label : '', amount : 0};
  constructor(private sharedService: SharedService) { }

  

  enregistrerInformations() {
    console.log('Enregistrement des informations...');
    this.sharedService.addAccount(this.account);
    console.log('Informations enregistrées.');

  }

  retourArriere() {
    window.history.back();
  }

}
