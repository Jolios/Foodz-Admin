import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn = false
  constructor(public firebaseAuth: AngularFireAuth,private router: Router,) { }

  async signin(email: string, password: string,returnUrl: string){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res => {
      this.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(res.user))
      this.router.navigate([returnUrl]);
    })
  }

  async signup(email: string, password: string,returnUrl: string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
    .then(res => {
      this.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(res.user))
      this.router.navigate([returnUrl]);
    })
  }

  public get currentUserValue(): boolean {
    return this.isLoggedIn;
}

  logout(){
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
    location.reload()
    //this.router.navigate(['login']);
  }
}

