import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signUp=false;
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

 

}
