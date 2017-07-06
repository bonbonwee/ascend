import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { List } from 'ionic-angular';
import { ViewHistoryPage } from '../view-history/view-history';
import { AddClimbPage } from '../add-climb/add-climb';
import { LandingPage } from '../landing/landing';
import { UsersProvider } from '../../providers/users/users';

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
  token: any = String

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public users: UsersProvider) {
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
  
  logoff() {
    console.log("the logoff function starts to execute");
    console.log("token value for logoff is " + window.localStorage.getItem("token"));
    this.token = window.localStorage.getItem("token");
    this.users.logout(this.token);
    this.navCtrl.push(LandingPage);
  }

}
