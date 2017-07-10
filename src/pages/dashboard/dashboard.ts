import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { List } from 'ionic-angular';
import { ViewHistoryPage } from '../view-history/view-history';
import { AddClimbPage } from '../add-climb/add-climb';
import { LandingPage } from '../landing/landing';
import { SummaryPage } from '../summary/summary';
import { UsersProvider } from '../../providers/users/users';
import { TopRopeClimbsProvider } from '../../providers/top-rope-climbs/top-rope-climbs';

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
  token: any = String;
  climbs: Object = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public users: UsersProvider,
    public trClimbs: TopRopeClimbsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
    
    let today = new Date().toISOString(); //set time to current day in UTC time
    let tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds of timezone difference to UTC
    today = (new Date(Date.now() - tzoffset)).toISOString().slice(0,-1); //corrected time zone
    today = today.slice(0,10);
    console.log("Today's date is " + today);
    
    /**
     ** Retrieves climbing data specific to user and only for the current day
     **/
    this.trClimbs.getTodaysClimbs(window.localStorage.getItem("userId"), today, window.localStorage.getItem('token'))
    .map(res => res.json())
    .subscribe(res => {     //handle successful responses and decide what happens next
      console.log("response is " + res);
      console.log(res[0]);
      console.log(res[1]);
      this.climbs = res;    //store response to climbs variable

    }, err => {             //inform user of known problems that arose, otherwise give generic failed message
      alert("Error: Could not retrieve climbing data!\n" + err);
    });
  }
  
  addClimb() {
    this.navCtrl.push(AddClimbPage);
  }
  
  viewSummary() {
    this.navCtrl.push(SummaryPage);
  }
  
  viewHistory() {
    this.navCtrl.push(ViewHistoryPage);
  }
  
  logoff() {
    console.log("the logoff function starts to execute");
    console.log("token value for logoff is " + window.localStorage.getItem("token"));
    this.token = window.localStorage.getItem("token");
    this.users.logout(this.token);
    this.navCtrl.setRoot(LandingPage);
  }

}
