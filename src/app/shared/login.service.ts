import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  private isAuthenticated;
  private loggedInUser;
  constructor() { }

  isValidUser(user) {
    this.isAuthenticated = (user.password === 'test');
    if (this.isAuthenticated) {
      this.setLoggedInUser(user);
    }
    return this.isAuthenticated;
  }

  isLoggedIn() {
    return this.isAuthenticated;
  }

  setLoggedInUser(user) {
    this.loggedInUser = user;
  }

  getLoggedInUser() {
    return this.loggedInUser;
  }

}
