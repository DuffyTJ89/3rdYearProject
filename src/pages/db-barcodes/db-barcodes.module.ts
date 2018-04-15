import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DbBarcodesPage } from './db-barcodes';

@NgModule({
  declarations: [
    DbBarcodesPage,
  ],
  imports: [
    IonicPageModule.forChild(DbBarcodesPage),
  ],
})
export class DbBarcodesPageModule {}
