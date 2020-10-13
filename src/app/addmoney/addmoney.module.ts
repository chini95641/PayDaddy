import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
 
import { IonicModule } from '@ionic/angular';

import { AddmoneyPageRoutingModule } from './addmoney-routing.module';

import { AddmoneyPage } from './addmoney.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,   
    AddmoneyPageRoutingModule
  ],
  declarations: [AddmoneyPage]
})
export class AddmoneyPageModule {}
 