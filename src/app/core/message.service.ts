import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  show() {
    /*for(var i=0; i < this.messages.length; i++){
      console.log(i + ': ' + this.messages[i]);
    }*/
    return this.messages.join(', ');
  }
}