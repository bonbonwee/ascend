import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UsersProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UsersProvider {

  constructor(public http: Http) {
    console.log('Hello UsersProvider Provider');
  }
  
  baseUrl: string = "https://bonniessf-phortonssf.c9users.io:8080/api"
  path: string = "/AppUsers"
  
  register(newUserData) {
    return this.http.post(
      this.baseUrl + this.path,
      newUserData
    );
  }

}
