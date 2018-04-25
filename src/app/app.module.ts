import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { DbBarcodesPage } from '../pages/db-barcodes/db-barcodes';



import {BarcodeScanner} from '@ionic-native/barcode-scanner';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DbBarcodesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp( 
      {
        apiKey: "AIzaSyCon1dDI5j1KznUjaPR670Uxgjy8BI5I6k",
        authDomain: "card-wallet-35cec.firebaseapp.com",
        databaseURL: "https://card-wallet-35cec.firebaseio.com",
        projectId: "card-wallet-35cec",
        storageBucket: "card-wallet-35cec.appspot.com",
        messagingSenderId: "229471668390"
      }),
      AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DbBarcodesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner
  ]
})
export class AppModule {}
