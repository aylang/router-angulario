import { Component, OnInit } from '@angular/core';
import { Router, RouterState } from '@angular/router';
import { MessageService } from '../../core/message.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  private state: RouterState = this.router.routerState;
  constructor(
    private router: Router,
    private messageService: MessageService
  ) { 
  }

  ngOnInit() {
    this.messageService.add(this.state.toString());
  }

}