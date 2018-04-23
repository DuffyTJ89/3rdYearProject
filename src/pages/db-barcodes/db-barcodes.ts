import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//imports for retrieving data from firebase database
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-db-barcodes',
  templateUrl: 'db-barcodes.html',

   template: `
  <ul>
    <li *ngFor="let item of items | async">
       {{ item | json }}
    </li>
  </ul>
  `,
})
export class DbBarcodesPage {

  items: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, db: AngularFireDatabase) {

    this.items=db.list('barcode').valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DbBarcodesPage');
  }

}
