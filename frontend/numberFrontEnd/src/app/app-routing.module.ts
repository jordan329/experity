import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestSubmissionComponent } from './request-submission/request-submission.component'
import { ResultsGridComponent } from './results-grid/results-grid.component';
const routes: Routes = [
  { path: 'request', component: RequestSubmissionComponent },
  { path: 'results', component: ResultsGridComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
