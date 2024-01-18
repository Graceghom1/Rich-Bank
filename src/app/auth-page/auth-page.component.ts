import { Component } from '@angular/core';

@Component({
  selector: 'auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent {

  loginInfos: any = {
    user_name:  '',
    user_password:  ''
    
  }

   array = [1,2,3,4,5,6,7,8,9,0,'',''].sort(()=>Math.random()-0.5);


  wrightPassWord(){
    this.loginInfos.user_password += 1;
  }

  deletePWd(){
    this.loginInfos.user_password = '';
  }
  addToPwd(event:any){
    this.loginInfos.user_password += event.target.value;
    console.log(this.loginInfos.user_password)
    console.log(this.array)
  }
}
