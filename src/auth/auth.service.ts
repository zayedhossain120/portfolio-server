import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  // sign up
  signUp() {
    return { msg: 'I m sign up' };
  }
  //login
  login() {
    return { msg: 'I m Login' };
  }
}
