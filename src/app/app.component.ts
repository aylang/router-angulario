import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageService } from './core/message.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  constructor (
    private messageService: MessageService
  ) {    }

}
