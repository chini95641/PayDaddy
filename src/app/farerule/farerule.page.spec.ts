import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FareRulePage } from './farerule.page';

describe('FareRulePage', () => {
  let component: FareRulePage;
  let fixture: ComponentFixture<FareRulePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FareRulePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FareRulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
