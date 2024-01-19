import { Component } from '@angular/core';
import { SharedService } from 'app/shared.service';

@Component({
  selector: 'app-sendmoney-page',
  templateUrl: './sendmoney-page.component.html',
  styleUrls: ['./sendmoney-page.component.css']
})
export class SendmoneyPageComponent {
   transac = {
    name: "",
    amount: 0,
    date: Date.now()
  }

  /**
   *
   */
  constructor(private shareService:SharedService) {
  }

  retourArriere() {
    window.history.back();
  }

  enregistrerInformations() {
    console.log(this.transac)
    this.shareService.addTransac(this.transac)
  }

}
