import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentComponent } from './Components/payment/payment.component';
import { SuccessPageComponent } from './success-page/success-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'payment', pathMatch: 'full' },
  { path: 'payment', component: PaymentComponent },
  { path: 'success', component: SuccessPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
