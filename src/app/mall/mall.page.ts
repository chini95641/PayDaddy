import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mall',
  templateUrl: './mall.page.html',
  styleUrls: ['./mall.page.scss'],
})
export class MallPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
	
  item_info() {
    this.route.navigate(['./item-info']);
  } 
 categories() {
    this.route.navigate(['./categories']);
  } 
}
 