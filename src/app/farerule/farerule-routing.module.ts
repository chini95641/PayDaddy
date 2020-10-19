import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FareRulePage } from './farerule.page';

const routes: Routes = [
  {
    path: '',
    component: FareRulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FareRulePageRoutingModule {}
