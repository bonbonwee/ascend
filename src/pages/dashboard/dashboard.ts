import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { List } from 'ionic-angular';
import { ViewHistoryPage } from '../view-history/view-history';
import { AddClimbPage } from '../add-climb/add-climb';



/**
 * Generated class for the DashboardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  
  //@ViewChild(List) list: list;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
    //this.list.enableSlidingItems(false);
  }
  
  addClimb() {
    this.navCtrl.push(AddClimbPage);
  }
  
  // viewSummary() {
  //   this.navCtrl.push(SummaryPage);
  // }
  
  viewHistory() {
    this.navCtrl.push(ViewHistoryPage);
  }
  
  

}
