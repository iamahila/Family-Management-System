import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn: boolean = false;

  constructor() { }

  isLoggedIn(){
    this.loggedIn = true;
  }

  isLoggedOut(){
    this.loggedIn = false;
  }

  isAuthenticated() : Promise<boolean>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
          resolve(this.loggedIn);
        }, 1000);
    });
  }
}
