import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cc-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('[job-detail-component] [ngOnInit]');
  }

}
