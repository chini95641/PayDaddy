import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetpaymentPage } from './getpayment.page';

const routes: Routes = [
  {
    path: '',
    component: GetpaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetpaymentPageRoutingModule {}
