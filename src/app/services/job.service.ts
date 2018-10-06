import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Subject, Observable, of } from 'rxjs';


// import { HttpClient } from '@angular/common/http';

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
            return this.http.get<any[]>(this.BASE_URL + '/api/jobs')
            .pipe(
                map(res => res)
            );
    }

    addJob(jobData) {


        jobData.Id = Date.now();
        
        let url: string = this.BASE_URL + '/api/jobs';
        console.log(url);
        return this.http.post(url, jobData);
            // map(res => 
            //     {
            //         console.log(res);
            //         this.jobSubjects.next(jobData);
            //     });
    }
}
