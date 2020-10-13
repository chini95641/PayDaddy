import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PhonerechargePage } from './phonerecharge.page';

describe('PhonerechargePage', () => {
  let component: PhonerechargePage;
  let fixture: ComponentFixture<PhonerechargePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonerechargePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PhonerechargePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
