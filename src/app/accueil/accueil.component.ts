import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { SharedService } from 'app/shared.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})

export class AccueilComponent implements OnInit {
  selectedLabel: string = "";

  constructor(private router: Router, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.selectedLabel$.subscribe(label => {
      this.selectedLabel = label;
    });
  }

  ouvrirNouveauCompte() {
    // Utilisez le service Router pour naviguer vers la page NewAccount
    this.router.navigate(['/new-account']);
  }

}

