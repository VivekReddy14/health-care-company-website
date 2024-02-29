import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from 'src/components/home-page/home-page.component';
const routes: Routes = [
  // { path: '', redirectTo: 'invoices', pathMatch: 'full'},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomePageComponent },
  // { path: 'newinvoice', component: NewinvoiceComponent },
  // { path: 'refunds', component: RefundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
