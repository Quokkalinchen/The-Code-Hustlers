import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';


@Injectable()
export class AuthService {

  constructor() { }

  loggedIn(): boolean {
    console.log("test");
    return tokenNotExpired('token');
  }


}
