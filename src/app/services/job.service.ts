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
            return this.http.get<any[]>(this.BASE_URL + '/api/jobs')
            .pipe(
                map(res => res)
            );
    }

    addJob(jobData) {

        jobData.Id = Date.now();
        
        let url: string = this.BASE_URL + '/api/jobs';
        console.log("addJob (début)");

        this.http.post<any>(url, jobData)
            .subscribe(
                data => {
                    console.log("POST Request is successful ", data);
                },
                error => {
                    console.log("Error", error);
                }
            );                   
            // map(res => 
            //     {
            //         console.log(res);
            //         this.jobSubjects.next(jobData);
            //     });
            console.log("addJob (fin)");
    }
}
