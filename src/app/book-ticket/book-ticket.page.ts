import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.page.html',
  styleUrls: ['./book-ticket.page.scss'],
})
export class BookTicketPage implements OnInit { 
 book_ticket: string = "train_ticket";
  constructor(private navCtrl: NavController) { }

  ngOnInit() { 
  }
  paymentsuccessful() {
    this.navCtrl.navigateRoot(['./paymentsuccessful']);
  } 
}
