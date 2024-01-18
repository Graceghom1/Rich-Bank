import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import  {AuthPageComponent} from './auth-page/auth-page.component';
import { AccueilComponent } from './accueil/accueil.component';
import { TransactionComponent } from './transaction/transaction.component';
import { NewAccountComponent } from './new-account/new-account.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthPageComponent,
    TransactionComponent,
    NewAccountComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccueilComponent


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
