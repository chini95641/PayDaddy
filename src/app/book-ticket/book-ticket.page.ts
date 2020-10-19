import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { airports } from './../../services/airport.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.page.html',
  styleUrls: ['./book-ticket.page.scss'],
})
export class BookTicketPage implements OnInit { 
 book_ticket: string = "train_ticket";
 httpOptions: any = null;
 info: Observable<any>;
  constructor(public loadingController: LoadingController, private navCtrl: NavController, private route: Router, public httpClient: HttpClient,private activatedRoute: ActivatedRoute) {
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
  airportnames: any;
  from: any;
  to: any;
  travelway: any;
  startdate: any;
  enddate: any;
  adult: any;
  child: any;
  searchbar: any;
  searchbarto: any;
  infant: any;
  class: any;
  date: string;
  getdate: any;
  seconddate: any;
  departuredate: any;
  returndate: any;
  newdata: any;
  ipaddress: any;
  list: any;
  airportList: any;
  airportListto: any;
  selectcountry: any;
  name: any;
  code: any;
  listview: any;
  listviewto: any;
  token: any;
  traceId: any;

  ngOnInit() { 
    this.token= this.activatedRoute.snapshot.paramMap.get("token");
    this.airportnames = airports;
    this.travelway = false;
    var json = 'http://www.ip-api.com/json';
    this.httpClient.get(json).subscribe(result => {
      this.newdata = result;
    });
    this.listview=true;
    this.listviewto = true;
  }

  async filterList(evt) {
    this.listview = true;
    this.airportList = this.airportnames;
    const searchTerm = evt.srcElement.value;
    console.log(searchTerm)
    if (!searchTerm) {
      return;
    }
  
    this.airportList = this.airportList.filter(currentAirport=> {
      if (currentAirport.CityName && searchTerm) {
        return (currentAirport.CityName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });
  }
  
  async filterListto(evt) {
    this.listviewto = true;
    this.airportListto = this.airportnames;
    const searchTerm = evt.srcElement.value;
    if (!searchTerm) {
      return;
    }
  
    this.airportListto = this.airportListto.filter(currentAirportto=> {
      if (currentAirportto.CityName && searchTerm) {
        return (currentAirportto.CityName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });
  }

  selectResult(cityname,citycode) {
    this.searchbar = citycode + "--" + cityname;
    this.listview = false;
    this.from = citycode;
  }

  selectResultto(cityname,citycode) {
    console.log(cityname,"listsearchto",citycode)
    this.searchbarto = citycode + "--" + cityname;
    this.listviewto = false;
    this.to = citycode;
  }

  Searchresult() {
    // this.navCtrl.navigateRoot(['./flightsearchresults']);
    var fullstartdate = this.startdate;
    var fullenddate = this.enddate;
    this.getdate = fullstartdate.split("T" ,1);
    this.departuredate = this.getdate + "T00: 00: 00";
    this.ipaddress = this.newdata.query;
    // console.log('IP: ', this.ipaddress);
    console.log(this.to,"from",this.from,"way","token",this.token,this.travelway,"startdate",this.departuredate,"adult",this.adult,"child",this.child,"infant",this.infant,"class",this.class)
    this.presentLoading();
    if(this.travelway == true)
    {
      this.seconddate = fullenddate.split("T" ,1);
      this.returndate = this.seconddate + "T00: 00: 00";
      let api = "http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/Search"
      let body = {
        "EndUserIp": this.ipaddress,
        "TokenId": this.token,
        "AdultCount": this.adult,
        "ChildCount": this.child,
        "InfantCount": this.infant,
        "DirectFlight": "false",
        "OneStopFlight": "false",
        "JourneyType": "2",
        "PreferredAirlines": null,
        "Segments": [
                {
                "Origin": this.from,
                "Destination": this.to,
                "FlightCabinClass": this.class,
                "PreferredDepartureTime": this.departuredate,
                "PreferredArrivalTime": this.departuredate
                },
                {
                "Origin": this.from,
                "Destination": this.to,
                "FlightCabinClass": this.class,
                "PreferredDepartureTime": this.returndate,
                "PreferredArrivalTime": this.returndate
                }
          ],
        "Sources": null
        };
      this.info = this.httpClient.post(
        api,
        body,
        this.httpOptions
      );
      this.info
      .subscribe(data => {
          console.log('my data: ', data.Response.Results[0]);
          var myJSON = JSON.stringify(data.Response.Results[0]);
          this.loadingController.dismiss('loading');
          this.route.navigate(['./flightsearchresults', {results:myJSON, traceId: data.Response.TraceId, token: this.token, ip: this.ipaddress}]);
      })
    }
    if(this.travelway == false)
    {
      let api = "http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/Search"
      let body = {
        "EndUserIp": this.ipaddress,
        "TokenId": this.token,
        "AdultCount": this.adult,
        "ChildCount": this.child,
        "InfantCount": this.infant,
        "DirectFlight": "false",
        "OneStopFlight": "false",
        "JourneyType": "1",
        "PreferredAirlines": null,
        "Segments": [
                {
                "Origin": this.from,
                "Destination": this.to,
                "FlightCabinClass": this.class,
                "PreferredDepartureTime": this.departuredate,
                "PreferredArrivalTime": this.departuredate
                }
          ],
        "Sources": null
        };
      this.info = this.httpClient.post(
        api,
        body,
        this.httpOptions
      );
      this.info
      .subscribe(data => {
          console.log('my data: ', data);
          var myJSON = JSON.stringify(data.Response.Results[0]);
          this.loadingController.dismiss('loading');
          this.route.navigate(['./flightsearchresults', {results:myJSON, traceId: data.Response.TraceId, token: this.token, ip: this.ipaddress}]);
      })
    }
    
  } 

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 3000000,
      id: 'loading'
    });
    await loading.present();
  }

}
