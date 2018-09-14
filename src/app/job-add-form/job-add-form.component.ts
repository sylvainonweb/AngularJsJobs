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
        salary: 0,
        currency: 'euros',
        startdate: new Date(),
        experience: '',
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
