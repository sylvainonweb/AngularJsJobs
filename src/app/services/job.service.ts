import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: Http) { }

  getJobs() {
      return this.http.get('src/data/jobs.json')
        .pipe(map(res => res.json()));

    // this.httpClient.get<Array<Job>>('src/data/jobs.json');
  }
}
