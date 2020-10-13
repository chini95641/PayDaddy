import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { APP_CONFIG, AppConfig } from '../app.config';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(@Inject(APP_CONFIG) public config: AppConfig, private route: Router) { }

  ngOnInit() {
  }
  myprofile() {
    this.route.navigate(['./myprofile']);
  }
  favorited() {
    this.route.navigate(['./favorited']);
  }
  notification() {
    this.route.navigate(['./notification']);
  }
  help() {
    this.route.navigate(['./help']);
  }
  condition() {
    this.route.navigate(['./condition']);
  }
  change_language() {
    this.route.navigate(['./change-language']);
  }
  buyAppAction() {
    window.open("http://bit.ly/cc_QuickPay", '_system', 'location=no');
  }
}
