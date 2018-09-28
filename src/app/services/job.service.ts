import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobService {

    jobs: Array<any> = [];
    jobSubjects = new Subject();

  constructor(private http: Http) { }

  getJobs() {
      return this.http.get('src/data/jobs.json')
        .pipe(map(res => res.json()));

    // this.httpClient.get<Array<Job>>('src/data/jobs.json');
  }

  addJob(jobData) {
    jobData.Id = Date.now();

    // Les Subjects permettent d'informer les "observers" qu'un nouveau job a été ajouté
    return this.jobSubjects.next(jobData);
  }
}
