import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.page.html',
  styleUrls: ['./my-orders.page.scss'],
})
export class MyOrdersPage implements OnInit {
  order_tab: string = "all";
  constructor(private route: Router) { }

  ngOnInit() {
  }

  search() {
    this.route.navigate(['./search']);
  } 
}
