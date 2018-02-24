import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  options: BarcodeScannerOptions; //options variable of type BarcodeScannerOptions
  resultsUI:{}; //used to dispaly the scanned results in the user interface 

  constructor(private barcode: BarcodeScanner, public navCtrl: NavController) { //get instances of these
  }

  async scanBarcode(){ //an asynchronous function

    const results = await this.barcode.scan(); //use instance of barcode scanner to call the scan method. Store in results
    this.resultsUI = await this.barcode.scan(); //results for user interface
    console.log(results); 
  }

}
