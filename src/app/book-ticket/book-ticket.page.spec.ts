import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookTicketPage } from './book-ticket.page';

describe('BookTicketPage', () => {
  let component: BookTicketPage;
  let fixture: ComponentFixture<BookTicketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookTicketPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookTicketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
