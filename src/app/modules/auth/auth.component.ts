import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authUser;

  constructor(private _authService:AuthService,public auth: AngularFireAuth) { }
  ngOnInit(): void {
  }

  loginUser(){
   this._authService.login();
    
  }

  logoutUser(){
    this._authService.logout();
    
  }

}
