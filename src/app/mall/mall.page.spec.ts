import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MallPage } from './mall.page';

describe('MallPage', () => {
  let component: MallPage;
  let fixture: ComponentFixture<MallPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MallPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
