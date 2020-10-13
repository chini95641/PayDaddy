import { Component, OnInit } from '@angular/core';
import { PromocodePage } from '../promocode/promocode.page';  
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-phonerecharge',
  templateUrl: './phonerecharge.page.html',
  styleUrls: ['./phonerecharge.page.scss'],
})
export class PhonerechargePage implements OnInit {

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
