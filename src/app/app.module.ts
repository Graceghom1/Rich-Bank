import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import  {AuthPageComponent} from './auth-page/auth-page.component';
import { AccueilComponent } from './accueil/accueil.component';
import { TransactionComponent } from './transaction/transaction.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthPageComponent,
    TransactionComponent
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
