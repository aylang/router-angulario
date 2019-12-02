import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-compose-message',
  templateUrl: './compose-message.component.html',
  styleUrls: ['./compose-message.component.css']
})
export class ComposeMessageComponent implements OnInit {

  private url;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.url = this.route.toString()
  }

}