import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestSubmissionComponent } from './request-submission/request-submission.component';
import { ResultsGridComponent } from './results-grid/results-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestSubmissionComponent,
    ResultsGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
