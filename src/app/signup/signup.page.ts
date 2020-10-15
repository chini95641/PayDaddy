import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import {MyEvent} from './../../services/myevent.services';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  windowRef:any;
  prefix:any;
  line:any;
  verifCode:any;
  constructor(public windowService : MyEvent, private route: Router, private AngularFireAuthModule:AngularFireAuth){}
  
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
  
}
