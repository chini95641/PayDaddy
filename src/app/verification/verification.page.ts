import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {MyEvent} from './../../services/myevent.services';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.page.html',
  styleUrls: ['./verification.page.scss'],
})
export class VerificationPage implements OnInit {

  windowRef:any;
  verifCode:any;
  constructor(public windowService : MyEvent, public toastCtrl: ToastController,private navCtrl: NavController) { }

  ngOnInit() {
    this.windowRef=this.windowService.windowRef;
  }

  tabs() {
    this.navCtrl.navigateRoot(['./tabs']);
  } 
  
  verifyCode(){
    this.windowRef.confirmationResult.confirm(this.verifCode)
    .then(async result=>{
    console.log(result)
    this.successShowToast();
    this.navCtrl.navigateRoot(['./tabs']);
     //If the result is successful...
    })
    .catch(err=>{
     console.log('err2',err)
     this.showToast();
    });
 }

 
 async showToast() {
  const toast = await this.toastCtrl.create({
    message: 'Insert Exact Phone Number',
    duration: 1000,
    position: 'bottom',
    cssClass: "black"
  });
  toast.present();
}

async successShowToast() {
  const toast = await this.toastCtrl.create({
    message: 'Login Success',
    duration: 1000,
    position: 'bottom',
    cssClass: "black"
  });
  toast.present();
}

}
