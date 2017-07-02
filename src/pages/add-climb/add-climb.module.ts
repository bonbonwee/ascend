import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddClimbPage } from './add-climb';

@NgModule({
  declarations: [
    AddClimbPage,
  ],
  imports: [
    IonicPageModule.forChild(AddClimbPage),
  ],
  exports: [
    AddClimbPage
  ]
})
export class AddClimbPageModule {}
