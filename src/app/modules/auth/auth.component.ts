import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';
import { async } from '@angular/core/testing';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  // authUser;

  // constructor(private _authService:AuthService,public auth: AngularFireAuth) { }
  // ngOnInit(): void {
  // }

  // loginUser(){
  //  this._authService.login();
    
  // }

  // logoutUser(){
  //   this._authService.logout();
    
  // }

  email: string;
  password: string;
  uid;
  user;
  
  constructor( public authService:AuthService) {
  }

  ngOnInit() {
    this.authService.getCurrentUser();
    console.log(this.authService.userData);
    
  }

  // getCurrentUser() {
  //   let user = this.auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       console.log(user.uid);
  //       console.log(user.email);
  //       console.log(user.displayName);  
  //       console.log(user.photoURL);
  //       console.log(user.providerData);
  //     } else {
  //       console.log('No user logged in');
  //     }
  //   });
  // }

  login() {
    this.authService.login();
    console.log(this.authService.userData);
  }
  logout() {
    this.authService.SignOut();
  }



  signUp() {
    this.authService.SignUp(this.email, this.password);
    this.email = ''; 
    this.password = '';
    
  }

  signIn() {
    this.authService.SignIn(this.email, this.password);
    this.email = ''; 
    this.password = '';
  }

  signOut() {
    this.authService.SignOut();
  }


}
