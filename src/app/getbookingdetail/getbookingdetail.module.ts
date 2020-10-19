import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
  
import { IonicModule } from '@ionic/angular';

import { GetBookingDetailPageRoutingModule } from './getbookingdetail-routing.module';

import { GetBookingDetailPage } from './getbookingdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    GetBookingDetailPageRoutingModule
  ],
  declarations: [GetBookingDetailPage], 
  entryComponents: [GetBookingDetailPage]
})
export class GetBookingDetailPageModule {}
