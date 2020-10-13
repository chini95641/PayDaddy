import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PayOrSendPage } from './pay-or-send.page';

describe('PayOrSendPage', () => {
  let component: PayOrSendPage;
  let fixture: ComponentFixture<PayOrSendPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayOrSendPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PayOrSendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
