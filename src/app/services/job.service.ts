import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Subject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

    jobs: Array<any> = [];
    jobSubjects = new Subject();
    BASE_URL = 'http://localhost:4201';

    constructor(private http: HttpClient) {
    }

    getJobs() {
        console.log('[job.service] [getJobs]');

            return this.http.get<any[]>(this.BASE_URL + '/api/jobs')
            .pipe(
                map(res => res)
            );
    }

    addJob(jobData) {
        console.log('[job.service] [addJob]');

        jobData.Id = Date.now();
        const url: string = this.BASE_URL + '/api/jobs';
        this.http.post<any>(url, jobData)
            .subscribe(o => {
                    this.jobSubjects.next(jobData);
                    console.log('[job.service] [addJob] : offre ajoutée à jobSubjects');
                });
    }
}
