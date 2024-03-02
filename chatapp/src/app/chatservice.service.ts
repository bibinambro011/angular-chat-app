import { Injectable } from '@angular/core';
import { WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket$: WebSocketSubject<any>;

  constructor() {
    this.socket$ = new WebSocketSubject('ws://localhost:8000');
  }

  sendMessage(message: string): void {
    this.socket$.next({ type: 'message', data: message });
  }

  getMessages() {
    return this.socket$.asObservable();
  }
}
