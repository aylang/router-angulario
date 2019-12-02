import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  private url;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.url = this.route.toString()
  }

}