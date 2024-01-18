import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'app/shared.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  selectedLabel: string ="";
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    console.log('NewAccountComponent initialisé.');
  }

  enregistrerInformations() {
    console.log('Enregistrement des informations...');
    this.sharedService.updateSelectedLabel(this.selectedLabel);
    console.log('Informations enregistrées.');

  }

  retourArriere() {
    window.history.back();
  }

}
