import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent {


  constructor(private apiService : ApiService, private router: Router){}

  loginInfos: any = {
    user_name:  '',
    user_password:  ''
    
  }

  action : String =  'login';

  array = [1,2,3,4,5,6,7,8,9,0,'',''].sort(()=>Math.random()-0.5);


  

  deletePWd(){
    this.loginInfos.user_password = '';
  }
  addToPwd(event:any){
    if (this.loginInfos.user_password.length < 6) {
      this.loginInfos.user_password += event.target.value;
    }
    //console.log(this.loginInfos.user_password)
  }

  switchAction(){
    if (this.action == 'login') {
      this.action =  'register'
    }else if(this.action == 'register'){
      this.action = 'login'
    }

    console.log(this.action);
  }

  send(){

    if (this.action == 'login') {
      this.apiService.login(this.loginInfos.user_name,this.loginInfos.user_password);
      
    }else if(this.action == 'register'){
      this.apiService.register(this.loginInfos.user_name,this.loginInfos.user_password);
      
    }


    
  }
}
