import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { FavoritedPageRoutingModule } from './favorited-routing.module';

import { FavoritedPage } from './favorited.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,  
    FavoritedPageRoutingModule
  ],
  declarations: [FavoritedPage]
})
export class FavoritedPageModule {} 
