import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { RegisterPage } from '../register/register';
import { UsersProvider } from '../../providers/users/users';

/**
 * Generated class for the LandingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})



export class LandingPage {
  
  user: Object = {}

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public usersProv: UsersProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }
  
  login(form) {
    if(form.invalid) {
      alert("You did not enter a valid email and/or password");
    } else {
      console.log("Value of " + this.user);
      this.usersProv.login(this.user)
      .map(res => res.json())
      .subscribe(res => {
        //handle successful response and decide what happens next
        console.log("Token value: " + res.id + "\nUser id: " + res.userId);
        window.localStorage.setItem("token", res.id);
        window.localStorage.setItem("userId", res.userId);
        // window.localStorage.setItem("token", res.token);
        // window.localStorage.setItem("userId", res.id);
        console.log("successful login");
        this.navCtrl.setRoot(DashboardPage);
      }, err => {
        //inform user of any known problems that arose, otherwise give a generic failed message
        if(err.status == 404) {
          return alert("Page Not Found");
        } else if (err.status == 403) {
          return alert("Forbidden");
        } else if (err.status == 401) {
          return alert("Unauthorized");
        } else if (err.status == 500) {
          return alert("Server is offline");
        } else {
          return alert("Error, was not able to log out");
        }
      });
    }
  }
  
  register() {
    this.navCtrl.push(RegisterPage);
  }

}
