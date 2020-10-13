import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoritedPage } from './favorited.page';

const routes: Routes = [
  {
    path: '',
    component: FavoritedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoritedPageRoutingModule {}
