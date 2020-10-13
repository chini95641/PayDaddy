import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { PhonerechargePageRoutingModule } from './phonerecharge-routing.module';

import { PhonerechargePage } from './phonerecharge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,     
    PhonerechargePageRoutingModule
  ],
  declarations: [PhonerechargePage]
})
export class PhonerechargePageModule {}
