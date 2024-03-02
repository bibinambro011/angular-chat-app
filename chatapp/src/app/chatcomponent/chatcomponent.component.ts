import { Component ,OnInit } from '@angular/core';

import { ChatService } from '../chatservice.service';

@Component({
  selector: 'app-chatcomponent',
  templateUrl: './chatcomponent.component.html',
  styleUrls: ['./chatcomponent.component.css']
})
export class ChatcomponentComponent implements OnInit {
  message !: string;
  messages: string[] = [];
  constructor(private webSocketService: ChatService) {}

  ngOnInit() {
    this.webSocketService.getMessages().subscribe((message: any) => {
      this.messages.push(message.data);
    });
  }

  sendMessage() {
    this.webSocketService.sendMessage(this.message);
    this.message = '';
    console.log(this.messages)
  }
}
