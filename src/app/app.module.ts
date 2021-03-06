import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
 import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './services/interceptors/index';

import { JobService } from './services/job.service';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobAddFormComponent } from './job-add-form/job-add-form.component';
import { DaysAgoPipe } from './pipes/days-ago/days-ago.pipe';
import { ToShortDatePipe } from './pipes/to-short-date/to-short-date.pipe';
import { HomeComponent } from './home/home.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { AboutComponent } from './about/about.component';
import { ToMoneySymbolPipe } from './pipes/to-money-symbol.pipe';

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

    DaysAgoPipe, ToShortDatePipe, ToMoneySymbolPipe,

    SearchComponent,
    JobListComponent,
    JobAddFormComponent,
    HomeComponent,
    JobDetailsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [JobService, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
