import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GetBookingDetailPage } from './getbookingdetail.page';

describe('GetBookingDetailPage', () => {
  let component: GetBookingDetailPage;
  let fixture: ComponentFixture<GetBookingDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetBookingDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GetBookingDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
