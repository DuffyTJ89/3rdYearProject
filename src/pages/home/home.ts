import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import{BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner';

import { AngularFireDatabase } from 'angularfire2/database';

import { DbBarcodesPage } from '../db-barcodes/db-barcodes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  itemsRef: any;

  options: BarcodeScannerOptions; //options variable of type BarcodeScannerOptions
  resultsUI:{}; //used to dispaly the scanned results in the user interface 
  //dbBarcode:{};

  //test = {test:'this is test data'};

  constructor(private barcode: BarcodeScanner, public navCtrl: NavController, private alertCtrl: AlertController, public db: AngularFireDatabase) { //get instances of these
  
    //this.db.list('test').push(this.test);
  }

  async scanBarcode(){ //an asynchronous function

    const results = await this.barcode.scan(); //use instance of barcode scanner to call the scan method. Store in results
    this.resultsUI = await this.barcode.scan(); //results for user interface
    console.log(results); 
    
  }

  async storeBarcode(){ //an asynchronous function

  

    this.db.list('barcode').push(this.resultsUI);

    

    let alert = this.alertCtrl.create({
      title: 'Bar code stored',
      buttons: ['OK']
    });
    alert.present();
  }

  async getBarcode(){

    this.navCtrl.push(DbBarcodesPage);
 
  }
}
