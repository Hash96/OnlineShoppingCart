import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/core/models/Chat';
import { ChatService } from 'src/app/core/services/chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  chatModel = new Chat;
  Messages;
  collapse:boolean=false;
  term =0;
  
  constructor(private _chatService:ChatService) { }

  ngOnInit(): void {
    this.getMessages();
  }
  changeCollapse(){
    this.collapse = !this.collapse;
    
  }

  send(){
    this.chatModel.fromUser = true;
    this.chatModel.createdAt = new Date;
    this._chatService.addMessage(this.chatModel);
    this.chatModel.body = ' ';
   
  }
 getMessages(){
  this._chatService.getMessages().subscribe(
    res=>{
      this.Messages = res;
      console.log(this.Messages);     
  }, err => {
    console.log(err);
  })
 }

 

}
