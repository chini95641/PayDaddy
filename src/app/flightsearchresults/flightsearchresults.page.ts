import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { aircompanies } from './../../services/aircompany.service';

@Component({
  selector: 'app-flightsearchresults',
  templateUrl: './flightsearchresults.page.html',
  styleUrls: ['./flightsearchresults.page.scss'],
})
export class FlightSearchResultsPage implements OnInit {
  order_tab: string = "show";
  constructor(private route: Router,private activatedRoute: ActivatedRoute) { }
  movelists: any;
  lists: any;
  results: any;
  duration: any;
  startdate: any;
  enddate: any;
  name: any;
  image: any;
  flightnumber: any;
  traceId: any;
  ipaddress: any;
  token: any;

  // var listData = {
  //   name: this.places[l].name,
  //   lastreview: 0,
  //   distance: this.distance[l]
  // }
  // this.lists.push(listData);

  ngOnInit() {
    this.results = [];
    this.movelists= this.activatedRoute.snapshot.paramMap.get("results");
    this.traceId= this.activatedRoute.snapshot.paramMap.get("traceId");
    this.token= this.activatedRoute.snapshot.paramMap.get("token");
    this.ipaddress= this.activatedRoute.snapshot.paramMap.get("ip");
    this.lists = JSON.parse(this.movelists);
    console.log("resultss",this.lists[0].Segments[0][0],"fare",this.lists[0].Fare.BaseFare,"token",this.traceId)
    this.lists.map((item,index)=>{
      this.flightnumber = item.Segments[0][0].Airline.AirlineCode + "-" + item.Segments[0][0].Airline.FlightNumber;
      var hours = Math.floor(item.Segments[0][0].Duration / 60);
      var mins = item.Segments[0][0].Duration - (hours * 60);
      this.duration = hours + "hr " + mins + "m";
      var start = item.Segments[0][0].Origin.DepTime;
      this.startdate = start.slice(11 ,16);
      var end = item.Segments[0][0].Destination.ArrTime;
      this.enddate = end.slice(11 ,16);
      aircompanies.map((airitem)=>{
        if(item.AirlineCode == airitem.id)
        {
          this.name = airitem.name;
          this.image = airitem.src;
        }
      })
      var listData = {
        name: this.name,
        image: this.image,
        flightnumber: this.flightnumber,
        duration: this.duration,
        startdate: this.startdate,
        enddate: this.enddate,
        startplace: item.Segments[0][0].Origin.Airport.CityName,
        endplace: item.Segments[0][0].Destination.Airport.CityName,
        totalprice: item.Fare.BaseFare,
        resultIndex: item.ResultIndex
      }
      this.results.push(listData);
    })
  }

  search() {
    this.route.navigate(['./book-ticket']);
  } 

  ToFairRule(resultindex) {
    
    var myJSON = JSON.stringify(this.lists);
    this.route.navigate(['./fare-rule',{lists : myJSON, ip: this.ipaddress, traceId: this.traceId, token: this.token, resultIndex: resultindex,image: this.image}]);
  }

}
