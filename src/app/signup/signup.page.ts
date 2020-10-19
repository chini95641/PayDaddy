import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MyEvent} from './../../services/myevent.services';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  username: any;
  password: any;
  httpOptions: any = null;
  info: Observable<any>;
  ipaddress: any;
  newdata: any;

  constructor(public windowService : MyEvent, public toastCtrl: ToastController, private route: Router, public httpClient: HttpClient, public loadingController: LoadingController){
    this.httpClient = httpClient;
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    headers.append('Access-Control-Allow-Origin', '*' );
    headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE' );
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With,Content-type' );
    headers.append('Access-Control-Allow-Credentials', 'true' );
    headers.append('Accept-Encoding', 'gzip' );
    this.httpOptions = {
        headers: headers,
        withCredentials: false
    };
  }
  
  ngOnInit() {
    var json = 'http://www.ip-api.com/json';
    this.httpClient.get(json).subscribe(result => {
      this.newdata = result;
    });
  }

  authentication() {
    // this.route.navigate(['./book-ticket']);
    this.presentLoading();
    this.ipaddress = this.newdata.query;
    let api = "http://api.tektravels.com/SharedServices/SharedData.svc/rest/Authenticate"
    let body = {
      "ClientId": "ApiIntegrationNew",
      "UserName": this.username,
      "Password": this.password,
      "EndUserIp": this.ipaddress
      };
    this.info = this.httpClient.post(
      api,
      body,
      this.httpOptions
    );
    this.info
      .subscribe(data => {
          console.log('my data: ', data.TokenId);
          if(data.TokenId == null)
          {
            this.showToast();
          }
          if(data.TokenId != null)
          {
            this.route.navigate(['./book-ticket', {token:data.TokenId}]);
            this.loadingController.dismiss('loading');
          }
        })
  }

  async showToast() {
    const toast = await this.toastCtrl.create({
      message: 'Insert Exact Authentication Info',
      duration: 1000,
      position: 'bottom',
      cssClass: "black"
    });
    toast.present();
  }

  

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 10000,
      id: 'loading'
    });
    await loading.present();
  }
  
}
