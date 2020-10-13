import { Component, OnInit } from '@angular/core';
	import { Router } from '@angular/router';

@Component({
  selector: 'app-favorited',
  templateUrl: './favorited.page.html',
  styleUrls: ['./favorited.page.scss'],
})
export class FavoritedPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
	
  item_info() {
    this.route.navigate(['./item-info']);
  } 

}
