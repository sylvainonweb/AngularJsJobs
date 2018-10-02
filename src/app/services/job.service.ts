import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map, tap } from 'rxjs/operators';
import { Subject, Observable, of } from 'rxjs';


// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobService {

    initialJobs: Array<any> = [];
    jobs: Array<any> = [];
    jobSubjects = new Subject();
    BASE_URL = 'http://localhost:4201';

    constructor(private http: Http) {
    }

    getJobs() {
        console.log('getJobs');
        if (this.jobs.length > 0 && this.initialJobs.length > 0) {
            console.log('Cas 1 : offres ajoutées + offres JSON');
            return of([...this.jobs, ...this.initialJobs]);
        } else if (this.jobs.length > 0 && this.initialJobs.length === 0) {
            console.log('Cas 2 : offres ajoutées seulement');
            return this.http.get(this.BASE_URL + '/api/jobs')
                .pipe(
                    map(res => res.json()),
                    tap(res => {
                            this.initialJobs = res;
                            this.jobs = [...this.jobs, ...this.initialJobs];
                        })
                );
        } else {
            console.log('Cas 3 : offres JSON seulement');
            return this.http.get(this.BASE_URL + '/api/jobs')
                .pipe(
                    map(res => res.json()),
                    tap(res => this.initialJobs = res)
                );
        }
    }

    addJob(jobData) {

        jobData.Id = Date.now();
        this.jobs = [jobData, ...this.jobs];

        // Les Subjects permettent d'informer les "observers" qu'un nouveau job a été ajouté
        return this.jobSubjects.next(jobData);
    }
}
