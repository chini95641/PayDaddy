import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.page.html',
  styleUrls: ['./item-list.page.scss'],
})
export class ItemListPage implements OnInit {
categories: string = "shirts";
  constructor(private route: Router) { }

  ngOnInit() {
  }


  search() {
    this.route.navigate(['./search']);
  } 
 item_info() {
    this.route.navigate(['./item-info']);
  } 
}
