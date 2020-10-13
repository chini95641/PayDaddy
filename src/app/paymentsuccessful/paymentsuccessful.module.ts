import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { PaymentsuccessfulPageRoutingModule } from './paymentsuccessful-routing.module';

import { PaymentsuccessfulPage } from './paymentsuccessful.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,   
    PaymentsuccessfulPageRoutingModule
  ],
  declarations: [PaymentsuccessfulPage]
})
export class PaymentsuccessfulPageModule {}
 