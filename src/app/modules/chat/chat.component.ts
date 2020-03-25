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
  
  constructor(private _chatService:ChatService) { }

  ngOnInit(): void {
  }

  send(){
    this.chatModel.fromUser = true;
    this.chatModel.createdAt = new Date;
    this._chatService.addMessage(this.chatModel);
  }

}
