import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { GetpaymentPageRoutingModule } from './getpayment-routing.module';

import { GetpaymentPage } from './getpayment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,   
    GetpaymentPageRoutingModule
  ],
  declarations: [GetpaymentPage]
})
export class GetpaymentPageModule {}
 