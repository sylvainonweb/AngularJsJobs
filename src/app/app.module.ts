import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
 import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './services/interceptors/index';

import { JobService } from './services/job.service';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobAddFormComponent } from './job-add-form/job-add-form.component';
import { DaysAgoPipe } from './pipes/days-ago.pipe';
import { HomeComponent } from './home/home.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { AboutComponent } from './about/about.component';

const routes = [
     { path: '', component: HomeComponent },
     { path: 'jobs/add', component: JobAddFormComponent },
     { path: 'jobs/:id', component: JobDetailsComponent },
     { path: 'jobs', component: JobListComponent },
     { path: 'about', component: AboutComponent }
];




@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    JobListComponent,
    JobAddFormComponent,
    DaysAgoPipe,
    HomeComponent,
    JobDetailsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    //HttpModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [JobService, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
