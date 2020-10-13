import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-paymentsuccessful',
  templateUrl: './paymentsuccessful.page.html',
  styleUrls: ['./paymentsuccessful.page.scss'],
})
export class PaymentsuccessfulPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  tabs() {
    this.navCtrl.navigateRoot(['./tabs']);
  } 
}
