import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FlightSearchResultsPage } from './flightsearchresults.page';

describe('FlightSearchResultsPage', () => {
  let component: FlightSearchResultsPage;
  let fixture: ComponentFixture<FlightSearchResultsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightSearchResultsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FlightSearchResultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
