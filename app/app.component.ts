import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { LoginComponent } from '../pages/login/login.component';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      this.rootPage = LoginComponent;
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
    
    });
  }
}
