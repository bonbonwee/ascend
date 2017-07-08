import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { List } from 'ionic-angular';
import { TopRopeClimbsProvider } from '../../providers/top-rope-climbs/top-rope-climbs';
import { DashboardPage } from '../dashboard/dashboard'

/**
 * Generated class for the AddClimbPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-climb',
  templateUrl: 'add-climb.html',
})
export class AddClimbPage {
  
  climb: any = {} //not sure if this is the right declaration
  //this.climb.userId = ""

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public climbsProv: TopRopeClimbsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddClimbPage');
  }
  
  addClimb(climbForm) {
    if(climbForm.invalid) {
      alert("Please fill in all required fields.");
    } else {
      this.climb.userId = window.localStorage.getItem('userId');
      this.climbsProv.submitClimb(this.climb, window.localStorage.getItem('token'))
      .map(res => res.json())
      .subscribe(res => {
        //handle successful responses and decide what happens next
        console.log(res);
        //window.localStorage.setItem('token', res.token);
        //window.localStorage.setItem('userId', res.id);
        this.navCtrl.setRoot(DashboardPage);
      }, err => {
        //inform user of known problems that arose, otherwise give generic failed message
        if(err.status === 404) {
          alert("page not found");
        }
        if(err.status === 422) {
          alert("unprocessable data");
        }
        if(err.status === 400) {
          alert("bad request");
        }
        if(err.status === 401) {
          alert("unauthorized");
        }
        if(err.status === 400) {
          alert("unprocessable entity");
        }
        else {
          alert("Error, unhandled status code");
        }
      });
    }
  }
}
