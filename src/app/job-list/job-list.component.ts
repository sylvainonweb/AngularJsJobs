import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';


@Component({
  selector: 'cc-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

    jobs: [any];
    error = '';

  constructor(private jobService: JobService) { }

  ngOnInit() {
      this.jobService.getJobs()
        .subscribe(
            data => this.jobs = data,
            error => {
                console.error(error);
                this.error = error;
            }
        );
  }
}

// class Job {
//     id: string;
//     title: string;
//     company:  string;
//     city: string;
//     zipcode: string;
//     description: string;
//     contract: string;
//     salary: number;
//     currency: number;
//     startdate: Date;
//     experience: string;
//     status: string;
//     area: string;
//     field: string;
//     publishdate: Date;
//     lastupdate: Date;
// }
