import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PromocodePage } from '../promocode/promocode.page';  
import { ModalController } from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  constructor(private modalController: ModalController, public loadingController: LoadingController, private route: Router,private activatedRoute: ActivatedRoute, public httpClient: HttpClient) {
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

  quotes: any;
  status: any;
  datas: any;
  firstname: any;
  httpOptions: any = null;
  info: Observable<any>;
  lastname: any;
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
  newdata: any;
  ipaddress: any;
  type: any;
  realbirth: any;
  realexpiry: any;
  bookingdatas: any;
  totalpay: any;
  traceId: any;
  ticket: any;

  ngOnInit() {
    this.newdata = [];
    this.ticket = [];
    this.presentLoading();
    this.quotes= this.activatedRoute.snapshot.paramMap.get("quotes");
    this.datas = JSON.parse(this.quotes);
    this.email= this.activatedRoute.snapshot.paramMap.get("email");
    this.contactno= this.activatedRoute.snapshot.paramMap.get("contactno");
    this.firstname= this.activatedRoute.snapshot.paramMap.get("firstname");
    this.lastname= this.activatedRoute.snapshot.paramMap.get("lastname");
    this.birthday= this.activatedRoute.snapshot.paramMap.get("birthday");
    this.realbirth = this.birthday.slice(0 ,19);
    this.gender= this.activatedRoute.snapshot.paramMap.get("gender");
    this.passport= this.activatedRoute.snapshot.paramMap.get("passport");
    this.expiry= this.activatedRoute.snapshot.paramMap.get("expiry");
    this.realexpiry = this.expiry.slice(0 ,19);
    this.addressline1= this.activatedRoute.snapshot.paramMap.get("addressline1");
    this.addressline2= this.activatedRoute.snapshot.paramMap.get("addressline2");
    this.country= this.activatedRoute.snapshot.paramMap.get("country");
    this.city= this.activatedRoute.snapshot.paramMap.get("city");
    this.token= this.activatedRoute.snapshot.paramMap.get("token");
    this.type= this.activatedRoute.snapshot.paramMap.get("type");
    this.traceId= this.activatedRoute.snapshot.paramMap.get("traceId");
    var json = 'http://www.ip-api.com/json';
    this.httpClient.get(json).subscribe(result => {
      this.newdata = result;
      this.ipaddress = this.newdata.query;
      console.log(this.realbirth,"continue",this.type,this.ipaddress,this.datas.Response.Results.IsLCC,this.email,this.contactno,this.birthday,this.gender,this.addressline1,this.addressline2,this.country,this.city,this.expiry,this.passport,this.firstname,this.lastname,this.token)
      if(this.datas.Response.Results.IsLCC == false)
      {
        let api = "http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/Book"
        let body = {
                "ResultIndex": this.datas.Response.Results.ResultIndex,
                "Passengers": [{
                  "Title": this.type,
                  "FirstName": this.firstname,
                  "LastName": this.lastname,
                  "PaxType": 1,
                  "DateOfBirth": this.realbirth,
                  "Gender": this.gender,
                  "PassportNo": this.passport,
                  "PassportExpiry": this.realexpiry,
                  "AddressLine1": this.addressline1,
                  "AddressLine2": this.addressline2,
                  "Fare": {
                    "Currency": this.datas.Response.Results.Fare.Currency,
                    "BaseFare": this.datas.Response.Results.Fare.BaseFare,
                    "Tax": this.datas.Response.Results.Fare.Tax,
                    "YQTax": this.datas.Response.Results.Fare.YQTax,
                    "AdditionalTxnFeePub": this.datas.Response.Results.Fare.AdditionalTxnFeePub,
                    "AdditionalTxnFeeOfrd": this.datas.Response.Results.Fare.AdditionalTxnFeeOfrd,
                    "OtherCharges": this.datas.Response.Results.Fare.OtherCharges,
                    "Discount": this.datas.Response.Results.Fare.Discount,
                    "PublishedFare": this.datas.Response.Results.Fare.PublishedFare,
                    "OfferedFare": this.datas.Response.Results.Fare.OfferedFare,
                    "TdsOnCommission": this.datas.Response.Results.Fare.TdsOnCommission,
                    "TdsOnPLB": this.datas.Response.Results.Fare.TdsOnPLB,
                    "TdsOnIncentive": this.datas.Response.Results.Fare.TdsOnIncentive,
                    "ServiceFee": this.datas.Response.Results.Fare.ServiceFee
                  },
                  "City": this.city,
                  "CountryCode": "IN",
                  "CellCountryCode" : "+92581-",
                              "ContactNo": this.contactno,
                  "Nationality": "IN",
                              "Email": this.email,
                  "IsLeadPax": true,
                  "FFAirlineCode": null,
                  "FFNumber": "",
                  "GSTCompanyAddress": "",
                  "GSTCompanyContactNumber": "",
                  "GSTCompanyName": "",
                  "GSTNumber": "",
                  "GSTCompanyEmail": ""
                }],
                "EndUserIp": this.ipaddress,
                "TokenId": this.token,
                "TraceId": this.datas.Response.TraceId
              };
        this.info = this.httpClient.post(
          api,
          body,
          this.httpOptions
        );
        this.info
        .subscribe(data => {
            console.log('my data: ', data.Response);
            this.loadingController.dismiss('loading');
            // var myJSON = JSON.stringify(data.Response.Results[0]);
            this.bookingdatas = data.Response.Response;
            this.totalpay = this.bookingdatas.FlightItinerary.Fare.PublishedFare;
        })
      }
      if(this.datas.Response.Results.IsLCC == true)
      {
        
        let api = "http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/Ticket"
        let body = {
          "PreferredCurrency": null,
          "ResultIndex": this.datas.Response.Results.ResultIndex,
          "AgentReferenceNo": "sonam1234567890",
          "Passengers": [{
            "Title": this.type,
            "FirstName": this.firstname,
            "LastName": this.lastname,
            "PaxType": 1,
            "DateOfBirth": this.realbirth,
            "Gender": this.gender,
            "PassportNo": this.passport,
            "PassportExpiry": this.realexpiry,
            "AddressLine1": this.addressline1,
            "AddressLine2": this.addressline2,
            "Fare": {
              "BaseFare": this.datas.Response.Results.Fare.BaseFare,
              "Tax": this.datas.Response.Results.Fare.Tax,
              "YQTax": this.datas.Response.Results.Fare.YQTax,
              "AdditionalTxnFeePub": this.datas.Response.Results.Fare.AdditionalTxnFeePub,
              "AdditionalTxnFeeOfrd": this.datas.Response.Results.Fare.AdditionalTxnFeeOfrd,
              "OtherCharges": this.datas.Response.Results.Fare.OtherCharges
            },
            "City": this.city,
            "CountryCode": "IN",
            "CountryName": this.country,      
            "Nationality": "IN",
            "ContactNo": this.contactno,
            "Email": this.email,
            "IsLeadPax": true,
            "FFAirlineCode": null,
            "FFNumber": null,
          
            "GSTCompanyAddress": "",
            "GSTCompanyContactNumber": "",
            "GSTCompanyName": "",
            "GSTNumber": "",
            "GSTCompanyEmail": ""
          }],
        "EndUserIp": this.ipaddress,
        "TokenId": this.token,
        "TraceId": this.traceId
        };
        this.info = this.httpClient.post(
          api,
          body,
          this.httpOptions
        );
        this.info
        .subscribe(data => {
            console.log('making ticket: ', data.Response);
            if(data.Response.Error.ErrorCode == 2)
            {
              alert("Error from Supplier. Please select another airplane. Booking Failed")
            }
            this.loadingController.dismiss('loading');
            this.ticket = data;
            this.totalpay = this.ticket.Response.Response.FlightItinerary.Fare.PublishedFare;
        })
      }
      
    });
  }

  paymentsuccess() {
    if(this.datas.Response.Results.IsLCC == true)
    {
      console.log("tick",this.ticket)
      var myJSON = JSON.stringify(this.ticket);
      this.route.navigate(['./paymentsuccessful',{ticket: myJSON, status: true, PNR: "", bookingId: "", ip: this.ipaddress, token: this.token, traceId: this.traceId}]);
    }
    if(this.datas.Response.Results.IsLCC == false)
    {
      this.route.navigate(['./paymentsuccessful',{status: false, PNR: this.bookingdatas.PNR, bookingId: this.bookingdatas.BookingId, ip: this.ipaddress, token: this.token, traceId: this.datas.Response.TraceId}]);
    }
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 30000,
      id: 'loading'
    });
    await loading.present();
  }

  promocode(){
    this.modalController.create({component:PromocodePage}).then((modalElement)=>
    {
      modalElement.present();
    }
    )
  } 
}
