import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TopRopeClimbsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class TopRopeClimbsProvider {

  constructor(public http: Http) {
    console.log('Hello TopRopeClimbsProvider Provider');
  }
  
  baseUrl: string = "https://bonniessf-phortonssf.c9users.io:8080/api"
  path: string = "/TopRopeClimbs"
  
  submitClimb(climb, token) { 
    return this.http.post( 
      this.baseUrl + this.path + '?access_token=' + token,
      climb
    );
  }
  
  getClimbs(userId, token) {
    console.log("getClimbs is called");
    console.log("getClimbs is passed: \n" + "userId: " + userId + "\ntoken: " + token);
    // return this.http.get(
    //   this.baseUrl + this.path + '?filter[where][userId]=' + userId + '&access_token=' + token
    //   );
    // return this.http.get(
    //   "https://bonniessf-phortonssf.c9users.io/api/TopRopeClimbs?filter=" + 
    //   "%7B%22userId%22%3A%20%22" + userId + "%22%7D" + "&access_token=" + token
    // );
    console.log(this.baseUrl + this.path + '?filter=[where][userId]=' + userId + '&access_token=' + token);
    return this.http.get(
      this.baseUrl + this.path + '?filter[where][userId]=' + userId + '&access_token=' + token
    );
  }

}
