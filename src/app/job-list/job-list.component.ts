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

    this.jobService.jobSubjects.subscribe(datum => {
        console.log(datum);
        this.jobs.push(datum);

        // Voir pour utiliser la méthode array destructuring pour reconstruire un tableau en plaçant
        // la nouvelle donnée en 1er dans le tableau
        // this.jobs = ([datum, ...this.jobs]);
    });
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
