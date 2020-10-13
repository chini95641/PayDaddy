import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  search() {
    this.route.navigate(['./search']);
  } 
  pay_or_send() {
    this.route.navigate(['./pay-or-send']);
  } 
  addmoney() {
    this.route.navigate(['./addmoney']);
  }
  getpayment() {
    this.route.navigate(['./getpayment']);
  } 
  phonerecharge() {
    this.route.navigate(['./phonerecharge']);
  }  
 book_ticket() {
    this.route.navigate(['./book-ticket']);
  } 
 transaction() {
    this.route.navigate(['./transaction']);
  }
	
}
