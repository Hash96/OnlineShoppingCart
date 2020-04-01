import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user;

  constructor(public authf: AngularFireAuth) { }

  login() {
    this.user= this.authf.signInWithPopup(new auth.GoogleAuthProvider());
    console.log("ppppppppppppppppppp");
    console.log(this.user);
    return this.user;
  }
  logout() {
    this.authf.signOut();
  }

}
