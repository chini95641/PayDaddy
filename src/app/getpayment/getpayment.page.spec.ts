import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GetpaymentPage } from './getpayment.page';

describe('GetpaymentPage', () => {
  let component: GetpaymentPage;
  let fixture: ComponentFixture<GetpaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetpaymentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GetpaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
