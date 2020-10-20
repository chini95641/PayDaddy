import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-farerule',
  templateUrl: './farerule.page.html',
  styleUrls: ['./farerule.page.scss'],
})
export class FareRulePage implements OnInit {
select_size: string = "XL";
select_color: string = "light_blue";
httpOptions: any = null;
info: Observable<any>;
info1: Observable<any>;
info2: Observable<any>;
favorite_icon = false;	
  constructor(private activatedRoute: ActivatedRoute, private route: Router, public httpClient: HttpClient, public loadingController: LoadingController) {
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
  quotedata: any;
  token: any;
  ipaddress: any;
  traceId: any;
  lists: any;
  resultIndex: any;
  uselists: any;
  FareRule: any;
  baseFare: any;
  totalFare: any;
  taxFare: any;
  segments: any;
  results: any;
  image: any;
  flightnumber: any;
  duration: any;
  startdate: String;
  enddate: String;
  starttime: any;
  endtime: any;
  adults: any;
  child: any;

  ngOnInit() {
    this.adults = 0;
    this.child = 0;
    this.segments = [];
    this.results = [];
    this.presentLoading();
    this.token = this.activatedRoute.snapshot.paramMap.get("token");
    this.image = this.activatedRoute.snapshot.paramMap.get("image");
    this.traceId= this.activatedRoute.snapshot.paramMap.get("traceId");
    this.ipaddress= this.activatedRoute.snapshot.paramMap.get("ip");
    this.resultIndex= this.activatedRoute.snapshot.paramMap.get("resultIndex");
    let api = "http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/FareRule"
      let body = {
        "EndUserIp": this.ipaddress,
        "TokenId": this.token,
        "TraceId": this.traceId,
        "ResultIndex": this.resultIndex
        };
      this.info = this.httpClient.post(
        api,
        body,
        this.httpOptions
      );
      this.info
      .subscribe(data => {
          console.log('my Rule: ', data);
          this.FareRule = data.Response.FareRules[0].FareRuleDetail;
      })
    let api1 = "http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/FareQuote"
      let body1 = {
        "EndUserIp": this.ipaddress,
        "TokenId": this.token,
        "TraceId": this.traceId,
        "ResultIndex": this.resultIndex
        };
      this.info1 = this.httpClient.post(
        api1,
        body1,
        this.httpOptions
      );
      this.info1
      .subscribe(data => {
          console.log('my Quote: ', data);
          if(data.Response.Error.ErrorCode == 2)
          {
            alert("Error from the Supplier, Please select another airplane")
          }
          this.quotedata = data;
          this.baseFare = data.Response.Results.Fare.BaseFare;
          this.totalFare = data.Response.Results.Fare.OfferedFare;
          this.taxFare = data.Response.Results.Fare.Tax;
          this.segments = data.Response.Results.Segments[0];
          this.adults = data.Response.Results.FareBreakdown[0].PassengerCount;
          if(data.Response.Results.FareBreakdown.length >1)
          {
            console.log("dear",data.Response.Results.FareBreakdown.length)
            this.child = data.Response.Results.FareBreakdown[1].PassengerCount;
          }
          this.segments.map((item)=>{
            this.flightnumber = item.Airline.AirlineCode + "-" + item.Airline.FlightNumber;
            var hours = Math.floor(item.Duration / 60);
            var mins = item.Duration - (hours * 60);
            this.startdate = item.Origin.DepTime.split("T" ,1);
            this.enddate = item.Destination.ArrTime.split("T" ,1);
            this.starttime = item.Origin.DepTime.slice(11 ,16);
            this.endtime = item.Destination.ArrTime.slice(11 ,16);
            this.duration = hours + "hr " + mins + "m";
            var listData = {
              name: item.Airline.AirlineName,
              image: this.image,
              flightnumber: this.flightnumber,
              duration: this.duration,
              startdate: this.startdate,
              enddate: this.enddate,
              startplace: item.Origin.Airport.CityName,
              endplace: item.Destination.Airport.CityName,
              starttime: this.starttime,
              endtime: this.endtime,
              startairportname: item.Origin.Airport.AirportName,
              endairportname: item.Destination.Airport.AirportName
            }
            this.results.push(listData);
          })
        let ssr = "http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/SSR"
        let ssrbody = {
          "EndUserIp": this.ipaddress,
          "TokenId": this.token,
          "TraceId": this.traceId,
          "ResultIndex": this.resultIndex
          };
        this.info2 = this.httpClient.post(
          ssr,
          ssrbody,
          this.httpOptions
        );
        this.info2
        .subscribe(data => {
            console.log('my SSR: ', data);
            this.loadingController.dismiss('loading');
        })
      })
  }

  toggleSaveIcon1() {
    this.favorite_icon = !this.favorite_icon;
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

  payment() {
    // this.route.navigate(['./paymentsuccessful']);
    console.log("success",this.results)
  }

  continue() {
    var myJSON = JSON.stringify(this.quotedata);
    this.route.navigate(['./booking',{quotes: myJSON,token: this.token, traceId: this.traceId}]);
  }

}
