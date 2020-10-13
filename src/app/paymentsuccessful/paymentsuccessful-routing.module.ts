import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentsuccessfulPage } from './paymentsuccessful.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentsuccessfulPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentsuccessfulPageRoutingModule {}
