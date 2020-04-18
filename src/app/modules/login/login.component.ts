import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signUp=false;
  constructor() { }

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

}
