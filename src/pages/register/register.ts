import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import { DashboardPage } from '../dashboard/dashboard';

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user: any = {}
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public usersProv: UsersProvider) {//assign provider name to new instance
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  
  signUp(form) {
    if(form.invalid) {
      return alert("Please fill in all required fields");
    } else {
      this.usersProv.register(this.user)
      .map(res => res.json())
      .subscribe(res => {
        //handle successful responses and decide what happens next
        console.log(res);
        window.localStorage.setItem('token', res.token);
        window.localStorage.setItem('userId', res.id);
        this.navCtrl.setRoot(DashboardPage);
      }, err => {
        //inform user of known problems that arose, otherwise give generic failed message
        if(err.status === 404) {
          alert("page not found");
        }
        if(err.status === 422) {
          alert("email already taken");
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
