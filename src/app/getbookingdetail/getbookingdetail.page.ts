import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-getbookingdetail',
  templateUrl: './getbookingdetail.page.html',
  styleUrls: ['./getbookingdetail.page.scss'],
})
export class GetBookingDetailPage implements OnInit {

  httpOptions: any = null;
  info: Observable<any>;
  constructor(private activatedRoute: ActivatedRoute, public httpClient: HttpClient) { 
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
  bookingId: any;
  PNR: any;
  bookingtitle: any;
  byuser: any;
  bookingdate: any;
  traveldate: any;
  ticket: any;
  isLcc: any;
  datas: any;
  flightdate: any;
  place: any;
  status: any;
  faretype: any;
  fareruledetail: any;
  cabinclass: any;
  flightroute: any;
  basefare: any;
  tax: any;
  offeredFare: any;
  commission: any;
  passenger: any;

  ngOnInit() {
    this.passenger = [];
    this.ipaddress= this.activatedRoute.snapshot.paramMap.get("ip");
    this.token= this.activatedRoute.snapshot.paramMap.get("token");
    this.bookingId= this.activatedRoute.snapshot.paramMap.get("bookingId");
    this.PNR= this.activatedRoute.snapshot.paramMap.get("PNR");
    this.ticket = this.activatedRoute.snapshot.paramMap.get("ticket");
    this.isLcc = this.activatedRoute.snapshot.paramMap.get("isLcc");
    this.datas = JSON.parse(this.ticket);
    console.log("datasmy",this.ipaddress,this.PNR,this.bookingId,this.isLcc)
    if(this.isLcc == "true")
    {
      console.log("for get",this.datas)
      let api = "http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/GetBookingDetails"
        let body = {
          "EndUserIp": this.ipaddress,
          "TokenId": this.token,
          "PNR": this.datas.Response.Response.PNR,
          "BookingId": this.datas.Response.Response.bookingId,
          "FirstName": this.datas.Response.Response.FlightItinerary.Passenger[0].FirstName,
          "LastName": this.datas.Response.Response.FlightItinerary.Passenger[0].LastName,
        };
        this.info = this.httpClient.post(
          api,
          body,
          this.httpOptions
        );
        this.info
        .subscribe(data => {
            console.log('get booking details: ', data);
            // var myJSON = JSON.stringify(data.Response.Results[0]);
            this.bookingtitle = data.Response.FlightItinerary.IssuancePcc;
            this.byuser = data.Response.FlightItinerary.Passenger[0].LastName;
            this.bookingdate = data.Response.FlightItinerary.InvoiceCreatedOn;
            this.traveldate = data.Response.FlightItinerary.Segments[0].Origin.DepTime;
            this.flightdate = data.Response.FlightItinerary.InvoiceCreatedOn;
            this.place = data.Response.FlightItinerary.Origin + "-" + data.Response.FlightItinerary.Destination;
            this.status = data.Response.FlightItinerary.AirlineCode;
            this.faretype = data.Response.FlightItinerary.FareRules[0].FareType;
            this.fareruledetail = data.Response.FlightItinerary.FareRules[0].FareRuleDetail;
            if(data.Response.FlightItinerary.Segments[0].CabinClass == "2")
            {
              this.cabinclass = "Business";
            }
            if(data.Response.FlightItinerary.Segments[0].CabinClass == "4")
            {
              this.cabinclass = "Economy";
            }
            this.flightroute = "[" + data.Response.FlightItinerary.Segments[0].Origin.Airport.CityCode + "]" + data.Response.FlightItinerary.Segments[0].Origin.Airport.CityName + " " + "[" + data.Response.FlightItinerary.Segments[0].Destination.Airport.CityCode + "]" + data.Response.FlightItinerary.Segments[0].Destination.Airport.CityName;
            this.basefare = data.Response.FlightItinerary.Fare.BaseFare;
            this.tax = data.Response.FlightItinerary.Fare.Tax;
            this.offeredFare = data.Response.FlightItinerary.Fare.OfferedFare;
            this.commission = data.Response.FlightItinerary.Fare.TdsOnCommission;
            data.Response.FlightItinerary.Passenger.map((item)=>{
              var listData = {
                name: item.Title + " " + item.FirstName  + " " + item.LastName,
                type: "Adult",
                birthday: item.DateOfBirth
              }
              this.passenger.push(listData);
            })
        })
    }
    if(this.isLcc == "false"){
      let api = "http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/GetBookingDetails"
        let body = {
          "EndUserIp": this.ipaddress,
          "TokenId": this.token,
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
            console.log('get booking details: ', data);
            // var myJSON = JSON.stringify(data.Response.Results[0]);
            this.bookingtitle = data.Response.FlightItinerary.IssuancePcc;
            this.byuser = data.Response.FlightItinerary.Passenger[0].LastName;
            this.bookingdate = data.Response.FlightItinerary.InvoiceCreatedOn;
            this.traveldate = data.Response.FlightItinerary.Segments[0].Origin.DepTime;
            this.flightdate = data.Response.FlightItinerary.InvoiceCreatedOn;
            this.place = data.Response.FlightItinerary.Origin + "-" + data.Response.FlightItinerary.Destination;
            this.status = data.Response.FlightItinerary.AirlineCode;
            this.faretype = data.Response.FlightItinerary.FareRules[0].FareType;
            this.fareruledetail = data.Response.FlightItinerary.FareRules[0].FareRuleDetail;
            if(data.Response.FlightItinerary.Segments[0].CabinClass == "2")
            {
              this.cabinclass = "Business";
            }
            if(data.Response.FlightItinerary.Segments[0].CabinClass == "4")
            {
              this.cabinclass = "Economy";
            }
            this.flightroute = "[" + data.Response.FlightItinerary.Segments[0].Origin.Airport.CityCode + "]" + data.Response.FlightItinerary.Segments[0].Origin.Airport.CityName + " " + "[" + data.Response.FlightItinerary.Segments[0].Destination.Airport.CityCode + "]" + data.Response.FlightItinerary.Segments[0].Destination.Airport.CityName;
            this.basefare = data.Response.FlightItinerary.Fare.BaseFare;
            this.tax = data.Response.FlightItinerary.Fare.Tax;
            this.offeredFare = data.Response.FlightItinerary.Fare.OfferedFare;
            this.commission = data.Response.FlightItinerary.Fare.TdsOnCommission;
            data.Response.FlightItinerary.Passenger.map((item)=>{
              var listData = {
                name: item.Title + " " + item.FirstName  + " " + item.LastName,
                type: "Adult",
                birthday: item.DateOfBirth
              }
              this.passenger.push(listData);
            })
        })

    }
      
  }

}
