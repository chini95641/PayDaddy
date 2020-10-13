import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { BookTicketPageRoutingModule } from './book-ticket-routing.module';

import { BookTicketPage } from './book-ticket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,   
    BookTicketPageRoutingModule
  ],
  declarations: [BookTicketPage]
})
export class BookTicketPageModule {}
 