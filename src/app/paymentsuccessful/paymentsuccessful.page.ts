import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-paymentsuccessful',
  templateUrl: './paymentsuccessful.page.html',
  styleUrls: ['./paymentsuccessful.page.scss'],
})
export class PaymentsuccessfulPage implements OnInit {

  httpOptions: any = null;
  info: Observable<any>;
  constructor(private navCtrl: NavController,private activatedRoute: ActivatedRoute, public httpClient: HttpClient) { 
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
  ipaddress: any;
  token: any;
  traceId: any;
  bookingId: any;
  PNR: any;
  status: any;
  ticket: any;
  isLcc: any;

  ngOnInit() {
    this.ticket = [];
    this.ipaddress= this.activatedRoute.snapshot.paramMap.get("ip");
    this.token= this.activatedRoute.snapshot.paramMap.get("token");
    this.traceId= this.activatedRoute.snapshot.paramMap.get("traceId");
    this.bookingId= this.activatedRoute.snapshot.paramMap.get("bookingId");
    this.PNR= this.activatedRoute.snapshot.paramMap.get("PNR");
    this.status= this.activatedRoute.snapshot.paramMap.get("status");
    console.log("datas",this.ipaddress,this.PNR,this.bookingId,this.status)
  }

  tabs() {
    this.navCtrl.navigateRoot(['./tabs']);
  } 

  getBookingdetail() {
    console.log("ticket", this.activatedRoute.snapshot.paramMap.get("ticket"))
    if(this.status == "true")
    {
      console.log("success")
      this.isLcc = true;
      this.navCtrl.navigateRoot(['./getBookingDetail',{isLcc: true, ticket: this.activatedRoute.snapshot.paramMap.get("ticket"),ip: this.ipaddress, token: this.token, bookingId: "", PNR: ""}]);
    }
    if(this.status == "false")
    {
      let api = "http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/Ticket"
        let body = {
          "EndUserIp": this.ipaddress,
          "TokenId": this.token,
          "TraceId": this.traceId,
          "PNR": this.PNR,
          "BookingId": this.bookingId
        };
        this.info = this.httpClient.post(
          api,
          body,
          this.httpOptions
        );
        this.info
        .subscribe(data => {
            console.log('making ticket: ', data);
            // var myJSON = JSON.stringify(data.Response.Results[0]);
            this.navCtrl.navigateRoot(['./getBookingDetail',{isLcc: false, ticket: "", ip: this.ipaddress, token: this.token, bookingId: this.bookingId, PNR: this.PNR}]);
        })
    }
  }

}
