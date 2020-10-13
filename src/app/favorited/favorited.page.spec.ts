import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FavoritedPage } from './favorited.page';

describe('FavoritedPage', () => {
  let component: FavoritedPage;
  let fixture: ComponentFixture<FavoritedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FavoritedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
