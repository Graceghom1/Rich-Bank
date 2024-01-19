import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Account } from 'app/classes/account';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl : String = 'https://coding-bank.fly.dev/';

  user  = {
    name : '',
    clientCode : '',
    token : ''
  }

  httpOptions = {
    headers : new HttpHeaders(
      { 
        'Content-Type': 'application/json',
        Authorization: 'Bearer '+this.user.token 
  })
  };

  constructor(private http: HttpClient , private router: Router) { }

  register(user_name:String , user_password : String){
    console.log(user_name)
    console.log(user_password)
    return this.http.post(this.baseUrl+"auth/register",{name:user_name, password:user_password}).subscribe(data=> this.setUserInfos((data as any).user.name,(data as any).user.clientCode,(data as any).jwt ))
  }

  login(clientCode:String , user_password : String){
    return this.http.post(this.baseUrl+"auth/login",{clientCode:clientCode, password:user_password}).subscribe(data=> this.setUserInfos((data as any).user.name,(data as any).user.clientCode,(data as any).jwt ))
  }

  createAccount(amount : number, name : string){
    //console.log(this.httpOptions)
    const params = new HttpParams()
      .set('initialBalance', amount)
      .set('label', name);
    return this.http.post<Account>(this.baseUrl+"accounts",{ params }).subscribe(data=> console.log(data))
  }

  setUserInfos(name : string,clientCode: string,tkn: string){
    this.user.name = name;
    this.user.clientCode = clientCode;
    this.user.token = tkn;

    localStorage.setItem('user',JSON.stringify(this.user) );
    this.router.navigateByUrl('accueil')
  }
}
