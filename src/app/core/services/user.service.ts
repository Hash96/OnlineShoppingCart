import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import "firebase/firestore";
import { auth } from "firebase/app";
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user;
  x;

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
      }, (err) => {
        console.log(err);
      }
    )
  }
  //google
  googleLogin() {
    let x = this.afAuth
      .signInWithPopup(new auth.GoogleAuthProvider())
      .then(
        (cred) => {
          if (cred.user) {
            this.db
              .collection("users")
              .doc(cred.user.uid)
              .valueChanges()
              .subscribe(
                (currentUser) => {
                  if (!currentUser) {
                    this.db.collection("users").doc(cred.user.uid).set({
                      Name: cred.user.displayName,
                      Email: cred.user.email,
                      Profile: cred.user.photoURL,
                      Contact: cred.user.phoneNumber
                    })
                  } else {
                    console.log(currentUser);
                  }
                }
              )
          }
        }
      )
    return x;
  }

  //logout
  logout() {
    let x = this.afAuth.signOut();
    console.log("ppppp");
    this.user = null;
    return x;
  }

  //sign up
  signUp(userDetails) {
    this.x = userDetails;
    let cred = this.afAuth.createUserWithEmailAndPassword(userDetails.email, userDetails.password);
    return cred;
    
  }

  chechDbUser(userDetails) {
    console.log(userDetails);
    this.db.collection("users").doc(userDetails.uid).set({
      Name: this.x.name,
      Email: this.x.email,
      Profile: userDetails.photoURL,
      Contact:userDetails.phoneNumber
  });
}

/* Sign in */
login(userDetails) {
  let x =this.afAuth.signInWithEmailAndPassword(userDetails.email, userDetails.password);
  return x;
    
}
}