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
  currentUser;
  

  constructor(public authService: AuthService) {
  }

  ngOnInit() {
    // this.authService.getCurrentUser()
    // console.log(this.authService.userData);

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
    this.authService.login().then((res) => {
      console.log('ccccccccccccccccc', res.user.uid);
      this.checkDb(res.user);
      this.currentUser = res.user;
    });
  }

  checkDb(user) {
    this.authService.checkDb(user.uid).subscribe(
      res => {
        console.log('check',res);
        if(!res){
          console.log('no res');
          console.log(this.currentUser.uid);
         
        }else{
          
        }
      }
    )
  }

insertUser(){
  this.authService.addUser(this.currentUser.uid,this.currentUser);
  
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

  test(user) {
    console.log('user', user);
    this.authService.test().subscribe(
      res => {
        console.log(res);
      }
    );

  }

}
