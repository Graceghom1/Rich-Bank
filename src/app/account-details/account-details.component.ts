import { Component } from '@angular/core';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent {

  accountId: string = '123456';
  accountLabel: string = 'Compte courant';
  accountCreationDate: Date = new Date(2024, 0, 14);
  accountAmount: number = 1000;
  
}


