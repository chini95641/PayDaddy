import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayOrSendPage } from './pay-or-send.page';

const routes: Routes = [
  {
    path: '',
    component: PayOrSendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayOrSendPageRoutingModule {}
