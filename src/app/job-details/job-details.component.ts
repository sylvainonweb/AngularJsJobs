import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { JobService } from '../services/job.service';

@Component({
  selector: 'cc-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

    protected job: Job;
    protected error: string = null;
    protected errorMessage = '';

  constructor(private jobService: JobService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log('[job-detail-component] [ngOnInit]');

    const id = this.activatedRoute.snapshot.params.id;
    this.jobService.getJob(id)
         .subscribe(data => {
            this.handleServerResponse(data);
         },
         error => {
            this.handleError(error);
         });
    }

    handleServerResponse(data: GetJobResponse) {
        if (data.success) {
            this.job = data.job;
        } else {
            this.errorMessage = data.message;
        }
    }

    handleError(error) {
      console.log(error.statusText);
    }
}
