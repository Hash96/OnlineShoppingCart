import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/User';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  signUp=false;
  userModel =  new User();
  error = 0;
 
  constructor(public _userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  

  moveSignUp(){
    this.signUp = true;
    console.log("ppppppppppp");
  }

  moveSignIn(){
    this.signUp=false;
    console.log("iiiiiiiiiiiiiii");
  }

  onGoogleLogin(){
    this._userService.googleLogin().then(
      (res)=>{
        this.router.navigate(['/']);
      }
    )
  }

 register(){
   this._userService.signUp(this.userModel).then(
     (res)=>{
      console.log(res.user.uid);
      this.insertUser(res.user);   
     },(err)=>{
       console.log("already have an account");
       this.signUp=false;
       this.error=1;
     }
   )
 }

insertUser(user){
  this._userService.chechDbUser(user);
  this.router.navigate(['/']);
 }

 login(){
   this._userService.login(this.userModel).then(
     (res)=>{
       console.log(res);
       this.router.navigate(['/']);
     },(err)=>{
       console.log(err);
       this.error=2;
     }
   )
 }
}
