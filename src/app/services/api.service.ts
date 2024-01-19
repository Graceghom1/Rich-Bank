import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Account } from 'app/classes/account';
import { SharedService } from 'app/shared.service';

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

  accounts : Account[] = [];

  httpOptions = {
    headers : new HttpHeaders(
      { 
        'Content-Type': 'application/json',
        Authorization: 'Bearer '+ JSON.parse(localStorage.getItem('user')|| '{}').token
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
    return this.http.post<Account>(this.baseUrl+"accounts",{initialBalance:amount, label:name},this.httpOptions).subscribe(data=> console.log(data))
  }

  getAccounts(){
    return this.http.get<Account[]>(this.baseUrl+"accounts",this.httpOptions).subscribe(data=> localStorage.setItem('accounts',JSON.stringify(data)))
  }

  emitTransaction(emitter : string, receiver : string,amount:number,description:string){
    return this.http.post<Account>(this.baseUrl+"accounts",{emitterAccountId:emitter, receiverAccountId:receiver,amount:amount,description:description},this.httpOptions).subscribe(data=> console.log(data))
  }

  getTransaction(id : string){
    const params = new HttpParams()
    .set('transactionId',id);
    return this.http.get<Account[]>(this.baseUrl+`transactions/${id}`,this.httpOptions).subscribe(data=> localStorage.setItem('accounts',JSON.stringify(data)))
  }

  sendAccounts(){
    if (this.accounts == null || this.accounts.length<1) {
      this.getAccounts();
      return this.accounts;
    }else{
      return this.accounts
    }
    
  }

  setUserInfos(name : string,clientCode: string,tkn: string){
    this.user.name = name;
    this.user.clientCode = clientCode;
    this.user.token = tkn;

    //console.log(tkn)

    localStorage.setItem('user',JSON.stringify(this.user) );

    
    
  }
}
