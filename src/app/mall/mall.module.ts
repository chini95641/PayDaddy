import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { MallPageRoutingModule } from './mall-routing.module';

import { MallPage } from './mall.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,  
    MallPageRoutingModule
  ],
  declarations: [MallPage]
})
export class MallPageModule {}
