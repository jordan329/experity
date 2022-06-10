import { Component, OnInit } from '@angular/core';
import { ColDef, GridReadyEvent, ValueGetterParams } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { Result } from '../models/result';
import { NumberApiService } from '../service/number-api.service';

@Component({
  selector: 'app-results-grid',
  templateUrl: './results-grid.component.html',
  styleUrls: ['./results-grid.component.scss']
})
export class ResultsGridComponent implements OnInit {

  results: Result[] = [];
  message = "";
  public rowData$!: Observable<Result[]>;

  constructor(private service: NumberApiService) { }

  ngOnInit(): void {
    this.service.getMessage().subscribe((x: any) => this.message = x.message);

  }

  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.service.getNumbers();
    this.service.getNumbers().subscribe(x => {
      x.forEach(y => y.scoreString = this.service.getScoreFromNumber(y.score));
      this.results = x
    });
  }

  public columnDefs: ColDef[] = [
    { field: 'sampleNumber', sort: 'asc'},
    { field: 'scoreString' },
  ];

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };


}
