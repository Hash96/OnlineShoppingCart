import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  items;

  constructor(private firestore: AngularFirestore) {
    this.items = firestore.collection('items').valueChanges().subscribe(res => {
      this.items = res;
      console.log(this.items);
    }, err => {
      console.log(err);
    });
  }
}
