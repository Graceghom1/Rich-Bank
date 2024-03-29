import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import  {AuthPageComponent} from './auth-page/auth-page.component';
import { AccueilComponent } from './accueil/accueil.component';
import { TransactionComponent } from './transaction/transaction.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SendmoneyPageComponent } from './sendmoney-page/sendmoney-page.component';
import { DetaitCompteComponent } from './detait-compte/detait-compte.component';
import { CompteComponent } from './compte/compte.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    AuthPageComponent,
    TransactionComponent,
    NewAccountComponent,
    AccueilComponent,
    SendmoneyPageComponent,
    DetaitCompteComponent,
    CompteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
