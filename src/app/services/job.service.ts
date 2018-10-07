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
            return this.http.get<any[]>(this.BASE_URL + '/api/jobs');
            // .pipe(
            //     map(res => res)
            // );
    }

    addJob(jobData) {

        jobData.Id = Date.now();
        
        let url: string = this.BASE_URL + '/api/jobs';
        return this.http.post<any>(url, jobData)
            .pipe(
                tap(response => 
                {
                    // On prévient tous les "abonnés" qu'une nouvelle offre a éyté ajouté.
                    this.jobSubjects.next(jobData);
                }));
    }
}
