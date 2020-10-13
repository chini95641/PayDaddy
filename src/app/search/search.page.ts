import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
	
	
  phonerecharge() {
    this.route.navigate(['./phonerecharge']);
  }  
 book_ticket() {
    this.route.navigate(['./book-ticket']);
  }

}
