import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { APP_CONFIG, AppConfig } from '../app.config';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  httpOptions:any = null;
  info: Observable<any>;

  constructor(@Inject(APP_CONFIG) public config: AppConfig, private route: Router, public httpClient: HttpClient) {
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

    // let api = "http://api.tektravels.com/SharedServices/SharedData.svc/rest/Authenticate"
    // let body = {
    //   "ClientId": "ApiIntegrationNew",
    //   "UserName": "uono",
    //   "Password": "uono@12345",
    //   "EndUserIp": "138.197.185.225"
    //   };
    // this.info = this.httpClient.post(
    //   api,
    //   body,
    //   this.httpOptions
    // );
    // this.info
    //   .subscribe(data => {
    //       console.log('my data: ', data);
    //     })
  }
   

  ngOnInit() {
  }
  myprofile() {
    this.route.navigate(['./myprofile']);
  }
  favorited() {
    this.route.navigate(['./favorited']);
  }
  notification() {
    this.route.navigate(['./notification']);
  }
  help() {
    this.route.navigate(['./help']);
  }
  condition() {
    this.route.navigate(['./condition']);
  }
  change_language() {
    this.route.navigate(['./change-language']);
  }
  buyAppAction() {
    window.open("http://bit.ly/cc_QuickPay", '_system', 'location=no');
  }
}
