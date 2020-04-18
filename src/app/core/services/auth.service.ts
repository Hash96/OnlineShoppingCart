import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';
import { auth, User } from 'firebase/app';
import { Customer } from '../models/Customer';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: Observable<Customer>;
  currentUser;
  User;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.userData = afAuth.authState;
  }

  getCurrentUser() {
    let x = this.afAuth.onAuthStateChanged((user) => {
      this.currentUser = user;
      console.log('jjj', this.currentUser);
      if (user) {
        console.log(user.email);
        console.log(user.displayName);
        console.log(user.uid);
        console.log(user.providerData);
        console.log(user.photoURL);
      } else {
        console.log('No user logged in');
      }
    });
    // x = this.currentUser;
    return x;
  }

  // google
  // login() {
  //   this.afAuth.signInWithPopup(new auth.GoogleAuthProvider()).then(credential => {
  //     if (credential.user) {
  //       console.log('cred', credential.user);
  //       this.currentUser = credential.user;
  //       this.afs.collection('users').doc(credential.user.uid).valueChanges()
  //         .subscribe(cred => {
  //           console.log("fffffff", cred);
  //           if (!cred) {
  //             console.log("yyyyyyyyyy");
  //             this.afs.collection('users').doc(credential.user.uid).set({
  //               name: credential.user.displayName,
  //               email: credential.user.email,
  //               contact: credential.user.phoneNumber,
  //               profile: credential.user.photoURL
  //             })
  //           }
  //           if (cred) {
  //             console.log("ttttttttttttttt");
  //           }

  //         })
  //     }
  //   });
  // }

  login() {
    let cred = this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
    return cred;

  }

  /* Sign up */
  SignUp(email: string, password: string) {

    this.afAuth
      .createUserWithEmailAndPassword("qwerty@uiop.com", "password")
      .then(res => {
        console.log('Successfully signed up!', res);
      })
      .catch(error => {
        console.log('Something is wrong:', error.message);
      });
  }

  /* Sign in */
  SignIn(email: string, password: string) {
    this.afAuth
      .signInWithEmailAndPassword("qwerty@uiop.com", "password")
      .then(res => {
        console.log('Successfully signed in!');
        console.log(res);

      })
      .catch(err => {
        console.log('Something is wrong:', err.message);
      });
  }

  /* Sign out */
  SignOut() {
    this.afAuth
      .signOut();
  }

  test() {
    // var docRef = db.collection("cities").doc("SF");

    // docRef.get().then(function (doc) {
    //   if (doc.exists) {
    //     console.log("Document data:", doc.data());
    //   } else {
    //     // doc.data() will be undefined in this case
    //     console.log("No such document!");
    //   }
    // }).catch(function (error) {
    //   console.log("Error getting document:", error);
    // });
    // let docRef = this.afs.collection('users',ref=>ref.where('email','==','hjhfhfuhiuhfdi')).valueChanges();
    let docRef = this.afs.collection('users').doc('N7oKhTOH22hXyOmW1dsPxnOXA4Z1').valueChanges();
    return docRef;
  }


  checkDb(uid) {
    let docRef = this.afs.collection('users').doc(uid).valueChanges();
    return docRef;
  }
  addUser(id, user) {
    console.log("pppppppppppppppppppp");
    this.afs.collection('users').doc(id).set({
      name: user.displayName,
      email: user.email,
      contact: user.phoneNumber,
      profile: user.photoURL
    });
  }


}



