import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-promocode',
  templateUrl: './promocode.page.html',
  styleUrls: ['./promocode.page.scss'],
})
export class PromocodePage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  dismiss(){
   this.modalController.dismiss();
 }
}
