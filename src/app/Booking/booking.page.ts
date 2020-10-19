import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MyEvent} from './../../services/myevent.services';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
  firstname: any;
  lastname: any;
  httpOptions: any = null;
  info: Observable<any>;
  ipaddress: any;
  newdata: any;
  quotes: any;
  type: any;
  birthday: any;
  gender: any;
  passport: any;
  expiry: any;
  addressline1: any;
  addressline2: any;
  country: any;
  city: any;
  contactno: any;
  email: any;
  token: any;
  traceId: any;

  constructor(public windowService : MyEvent, public toastCtrl: ToastController,private activatedRoute: ActivatedRoute, private route: Router, public httpClient: HttpClient){
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
    this.quotes= this.activatedRoute.snapshot.paramMap.get("quotes");
    this.token= this.activatedRoute.snapshot.paramMap.get("token");
    this.traceId= this.activatedRoute.snapshot.paramMap.get("traceId");
    var json = 'http://www.ip-api.com/json';
    this.httpClient.get(json).subscribe(result => {
      this.newdata = result;
    });
  }

  continue() {
    console.log("continue",this.quotes,this.email,this.contactno,this.birthday,this.gender,this.addressline1,this.addressline2,this.country,this.city,this.expiry,this.passport,this.firstname,this.lastname,this.token,this.type)
    this.route.navigate(['./payment',{quotes: this.quotes, traceId: this.traceId, email: this.email, contactno: this.contactno, birthday: this.birthday, gender: this.gender, addressline1: this.addressline1, addressline2: this.addressline2, country: this.country, city: this.city, expiry: this.expiry, passport: this.passport, firstname: this.firstname, lastname: this.lastname,token: this.token, type: this.type}]);
  }
}
