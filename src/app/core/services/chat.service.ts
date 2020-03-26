import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';
import { Chat } from '../models/Chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  messages;

  constructor(private db:AngularFirestore) { }

  addMessage(chatModel){
    console.log(chatModel);
    let x = this.db.collection('chats').doc('4rH0lOOUgxFy0uZCyHUE').collection('messages').add({
      body:chatModel.body,
      createdAt :chatModel.createdAt,
      fromUser:chatModel.fromUser
    });
    console.log(x);
    this.getMessages();
  }

  getMessages(){
    this.messages = this.db.collection('chats').doc('4rH0lOOUgxFy0uZCyHUE').collection('messages',ref=>ref.orderBy('createdAt')).valueChanges();
    //console.log(this.messages);
    return this.messages;

  }



}
