import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

//imports for retrieving data from firebase database
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Component({
  templateUrl: 'app.html',

  template: `
  <ul>
    <li *ngFor="let item of items | async">
       {{ item | json }}
    </li>
  </ul>
  `,
})
export class MyApp {
  rootPage:any = HomePage;
  items: Observable<any[]>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, db: AngularFireDatabase) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.items=db.list('barcode').valueChanges();
    });
  }

  
}

