import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { AngularFireAuth } from '@angular/fire/compat/auth'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userLogedIn: any;
  constructor() { }

  // login(email: any, password: any){
  //   return this.auth.signInWithEmailAndPassword(email, password)
  // }
}
