import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { FlightSearchResultsPageRoutingModule } from './flightsearchresults-routing.module';

import { FlightSearchResultsPage } from './flightsearchresults.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,   
    FlightSearchResultsPageRoutingModule
  ],
  declarations: [FlightSearchResultsPage], 
  entryComponents: [FlightSearchResultsPage]
})
export class FlightSearchResultsPageModule {}
 