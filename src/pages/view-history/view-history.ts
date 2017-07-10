import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TopRopeClimbsProvider } from '../../providers/top-rope-climbs/top-rope-climbs';

/**
 * Generated class for the ViewHistoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-view-history',
  templateUrl: 'view-history.html',
})
export class ViewHistoryPage {
  
  climbs: Object = []
  todayDate: String = new Date().toISOString();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public trClimbs: TopRopeClimbsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewHistoryPage');
    //console.log("return object from getClimbs function" + this.trClimbs.getClimbs(window.localStorage.getItem("userId"), window.localStorage.getItem("token")));
    
    /**
     ** Retrieves climbing data specific to user
     **/
    this.trClimbs.getClimbs(window.localStorage.getItem("userId"), window.localStorage.getItem('token'))
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

}
