import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Subject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

    jobSubjects = new Subject<Job>();
    BASE_URL = 'http://localhost:4201';

    constructor(private http: HttpClient) {
    }

    getJobs() {
        console.log('[job.service] [getJobs]');

        return this.http.get<Job[]>(`${this.BASE_URL}/api/jobs`)
        .pipe(
            map(response => response)
        );
    }

    getJob(id: number) {
        console.log(`[job.service] [getJob(${id})]`);

        return this.http.get<GetJobResponse>(`${this.BASE_URL}/api/jobs/${id}`)
        .pipe(
            map(res => res)
        );
    }

    addJob(job: Job) {
        console.log('[job.service] [addJob]');

        this.http.post<Job>(`${this.BASE_URL}/api/jobs`, job)
            .subscribe(o => {
                    this.jobSubjects.next(job);
                    console.log('[job.service] [addJob] : offre ajoutée à jobSubjects');
                });
    }
}

