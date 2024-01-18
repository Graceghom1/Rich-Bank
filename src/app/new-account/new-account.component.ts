import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  selectedAccount: string | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.selectedAccount = params['account'];
      console.log('Received parameter account:', this.selectedAccount);
      // Vous pouvez utiliser la valeur de "from" pour effectuer des actions spécifiques si nécessaire
    });

  }

}
