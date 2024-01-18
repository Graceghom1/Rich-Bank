import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'app/shared.service';

@Component({
  selector: 'app-detait-compte',
  templateUrl: './detait-compte.component.html',
  styleUrls: ['./detait-compte.component.css']
})
export class DetaitCompteComponent implements OnInit {
  public account : any

  constructor(private shareService: SharedService) {}

  ngOnInit(): void {
    let size =  this.shareService.accounts.length
    this.account = this.shareService.accounts[size - 1]
    console.log(this.account)
  }

}
