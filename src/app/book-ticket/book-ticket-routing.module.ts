import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookTicketPage } from './book-ticket.page';

const routes: Routes = [
  {
    path: '',
    component: BookTicketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookTicketPageRoutingModule {}
