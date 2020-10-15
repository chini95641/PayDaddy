import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import {MyEvent} from './../../services/myevent.services';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  windowRef:any;
  prefix:any;
  line:any;
  constructor(private navCtrl: NavController, public toastController: ToastController, private route: Router,public windowService : MyEvent,  private AngularFireAuthModule:AngularFireAuth) { }

  ngOnInit() {
  }

  //Initiate windowRef from WindowService
  ionViewWillEnter(){
    this.windowRef=this.windowService.windowRef;
    this.windowRef.recaptchaVerifier=new firebase.auth.RecaptchaVerifier('recaptcha-container');
    this.windowRef.recaptchaVerifier.render();
  }
  sendLoginCode(){
  //Make sure phone number in e164 format
     const num=this.line;
     const appVerifier=this.windowRef.recaptchaVerifier;
     this.AngularFireAuthModule.signInWithPhoneNumber(num,appVerifier)
     .then(result=>{
     this.windowRef.confirmationResult=result;
     console.log(result)
     this.route.navigate(['./verification']);
     }).catch(err=>console.log('err1',err))
  }

  // tabs() {
  //   this.navCtrl.navigateRoot(['./tabs']);
  // } 
  // register_now() {
  //   this.route.navigate(['./signup']);
  // } 
//  forgotpassword() {
//     this.route.navigate(['./forgotpassword']);
//   } 
}
