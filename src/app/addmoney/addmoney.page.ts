import { Component, OnInit } from '@angular/core';
import { PromocodePage } from '../promocode/promocode.page';  
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-addmoney',
  templateUrl: './addmoney.page.html',
  styleUrls: ['./addmoney.page.scss'],
})
export class AddmoneyPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

 promocode(){
    this.modalController.create({component:PromocodePage}).then((modalElement)=>
    {
      modalElement.present();
    }
    )
  } 
}
