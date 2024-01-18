import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { AccueilComponent } from './accueil/accueil.component';
import { TransactionComponent } from './transaction/transaction.component';
import { NewAccountComponent } from './new-account/new-account.component';

const routes: Routes = [
  {path:'',component:AuthPageComponent},
  {path:'accueil',component:AccueilComponent},
  {path:'transaction',component:TransactionComponent},
  {path:'new-account',component:NewAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
