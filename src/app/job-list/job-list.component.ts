import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';


@Component({
  selector: 'cc-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

    jobs: Array<Job> = [];
    error = '';

  constructor(private jobService: JobService) { }

  ngOnInit() {
    console.log('[job-list-component] [ngOnInit]');

      this.jobService.getJobs()
        .subscribe(
            data => {
                this.jobs = data;
                console.log('[job-list-components] [jobservice.getJobs.subscribe]');
            },
            error => {
                console.error(error);
                this.error = error;
            }
        );

    // Permet en cas de changement des offres d'emploi d'ajouter le nouvel élément dans la liste affichée
    // sans récupérer tous les éléments (seulement les nouveaux) pour des problèmes de performances
    this.jobService.jobSubjects
        .subscribe(datum => {
            this.jobs = [datum, ...this.jobs];
            console.log('[job-list-components] [jobservice.jobSubjects.subscribe]');
    });
  }
}


