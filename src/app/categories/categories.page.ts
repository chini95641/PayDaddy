import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
categories: string = "fashion";
  constructor(private route: Router) { }

  ngOnInit() {
  }
  item_lists() {
    this.route.navigate(['./item-list']);
  } 
 search() {
    this.route.navigate(['./search']);
  } 

}
