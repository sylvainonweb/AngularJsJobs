import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';


@Component({
  selector: 'cc-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

    jobs: Array<any> = [];
    error: string = '';

  constructor(private jobService: JobService) { }

  ngOnInit() {
      this.jobService.getJobs()
        .subscribe(
            // On rafraichit la liste des offres
            data => this.jobs = data,
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
