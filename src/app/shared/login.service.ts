import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }

  isValidUser(user) {
    return user.userName === 'test' && user.password === 'test';
  }

}
