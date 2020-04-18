import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import "firebase/firestore";
import { auth } from "firebase/app";
import { AngularFireAuth } from '@angular/fire/auth/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user;

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) {
    this.getCurrentUser();
  }
//get current user who has logged
  getCurrentUser() {
    this.afAuth.authState.subscribe(
      (user) => {
        if (user) {
          this.db.collection("users").doc(user.uid).valueChanges().subscribe(
            (cred) => {
              if (cred) {
                this.user = cred;
              }
            }
          )
        }
      },(err)=>{
        console.log(err);
      }
    )
  }
//sign in with google
  googleLogin(){
    this.afAuth.signInWithPopup(new auth.GoogleAuthProvider()).then(
      (cred)=>{
        if(cred.user){
          this.db.collection("users").doc(cred.user.uid).valueChanges().subscribe(
            (currentUser)=>{
              if(!currentUser){
                this.db.collection("users").doc(cred.user.uid).set({
                  Name :cred.user.displayName,
                  Email : cred.user.email,
                  Profile:cred.user.photoURL,
                  Contact : cred.user.phoneNumber 
                })
              }else{
                console.log(currentUser);
              }
            }
          )
        }
      }
    )
  }
}
