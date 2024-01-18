import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { AccueilComponent } from './accueil/accueil.component';
import { TransactionComponent } from './transaction/transaction.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { SendmoneyPageComponent } from './sendmoney-page/sendmoney-page.component';
import { DetaitCompteComponent } from './detait-compte/detait-compte.component';

const routes: Routes = [
  {path:'',component:AuthPageComponent},
  {path:'accueil',component:AccueilComponent},
  {path:'detail',component:DetaitCompteComponent},
  {path:'transaction',component:TransactionComponent},
  {path:'new-account',component:NewAccountComponent},
  {path:'sendmoney-page',component:SendmoneyPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
