import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
        {id: 1, name: 'cadre', value: 'executive'},
        {id: 1, name: 'employé', value: 'employee'}
    ];

    experiences: Array<Experience> = [
        { id: 1, name: 'junior', value: 'junior'},
        { id: 2, name: 'medior', value: 'medior'},
        { id: 3, name: 'senior', value: 'senior'}
    ];

    areas: Array<Area> = [
        {id: 1, name: 'aucun déplacements', value: 'none'},
        {id: 2, name: 'déplacements régionaux', value: 'region'},
        {id: 3, name: 'déplacements nationaux', value: 'nation'},
        {id: 4, name: 'déplacements internationaux', value: 'international'}
    ];

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {

    this.form = this.formBuilder.group({
        id: -1,
        title: '',
        company:  '',
        city: '',
        zipcode: 35,
        description: '',
        contract: '',
        salary: null,
        currency: null,
        startdate: new Date(),
        experience: null,
        status: '',
        area: '',
        field: '',
        publishdate: new Date(),
        lastupdate: new Date()
    });
  }

  createJob() {
    console.log(this.form.value);
  }
}

class ContractType {
    id: number;
    name: string;
    value: string;
}

class Currency {
    id: number;
    name: string;
    value: string;
    symbol: string;
}

class Status {
    id: number;
    name: string;
    value: string;
}

class Experience {
    id: number;
    name: string;
    value: string;
}

class Area {
    id: number;
    name: string;
    value: string;
}
