import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JobService } from '../services/job.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cc-job-add-form',
  templateUrl: './job-add-form.component.html',
  styleUrls: ['./job-add-form.component.css']
})
export class JobAddFormComponent implements OnInit {

    form: FormGroup;

    contractTypes: Array<ContractType> = [
        { id: 1, name: 'Stage', value: 'internship' },
        { id: 2, name: 'Interim', value: 'temp' },
        { id: 3, name: 'CDD', value: 'fixed-term' },
        { id: 4, name: 'CDI', value: 'permanent' },
        { id: 5, name: 'Indépendant', value: 'freelance' }
    ];

    currencies: Array<Currency> = [
        { id: 1, name: 'Euro', value: 'EU', symbol: '€' },
        { id: 2, name: 'Livres', value: 'POUNDS', symbol: '£' },
        { id: 3, name: 'Francs CFA', value: 'CFA', symbol: 'CFA' },
        { id: 3, name: 'Dollars', value: 'DOLLARS', symbol: '$' }
    ];

    statuses: Array<Status> = [
        {id: 1, name: 'Cadre', value: 'executive'},
        {id: 1, name: 'Employé', value: 'employee'}
    ];

    experiences: Array<Experience> = [
        { id: 1, name: 'Junior', value: 'junior'},
        { id: 2, name: 'Medior', value: 'medior'},
        { id: 3, name: 'Senior', value: 'senior'}
    ];

    areas: Array<Area> = [
        {id: 1, name: 'Aucun déplacement', value: 'none'},
        {id: 2, name: 'Déplacements régionaux', value: 'region'},
        {id: 3, name: 'Déplacements nationaux', value: 'nation'},
        {id: 4, name: 'Déplacements internationaux', value: 'international'}
    ];

  constructor(private formBuilder: FormBuilder, private jobService: JobService, private router: Router) { }
  ngOnInit() {
    console.log('[job-add-form-component] [ngOnInit]');

    this.form = this.formBuilder.group({
        id: -1,
        title: 'Développeur Front End',
        company:  'DLM SOFT',
        city: 'Chalon Sur Saône',
        zipcode: 71,
        description: 'Vous êtes passioné par le développement web ? Vous connaissez Angular ? Rejoignez nous.',
        contract: '',
        salary: null,
        currency: null,
        startdate: new Date(),
        experience: null,
        status: '',
        area: '',
        field: '',
        publishdate: Date.now(),
        lastupdate: new Date()
    });
  }

  createJob(jobData) {
    console.log('[job-add-form.component] [createJob]');
    this.jobService.addJob(jobData);
    this.form.reset();
  }

  returnToJobs() {
    console.log('[job-add-form.component] [returnToJobs]');
    this.router.navigate(['/jobs']);
  }
}

