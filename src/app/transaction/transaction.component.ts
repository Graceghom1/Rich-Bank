import { Component, OnInit } from '@angular/core';
import { SharedService } from 'app/shared.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transacs : any[] = []
  now = Date.now()
  all = 0
date: any;
account: any;

  constructor(private shareService: SharedService) {}

  ngOnInit(): void {
  this.transacs = this.shareService.transacs
  for(let t of this.transacs) {
    this.all += t.amount
  }
  }

  retourArriere() {
    window.history.back();
  }
}
