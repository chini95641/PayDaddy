import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
  
import { IonicModule } from '@ionic/angular';

import { PayOrSendPageRoutingModule } from './pay-or-send-routing.module';

import { PayOrSendPage } from './pay-or-send.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,  
    PayOrSendPageRoutingModule
  ],
  declarations: [PayOrSendPage]
})
export class PayOrSendPageModule {}
