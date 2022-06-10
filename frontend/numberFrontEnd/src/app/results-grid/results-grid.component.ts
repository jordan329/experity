import { Component, OnInit } from '@angular/core';
import { NumberApiService } from '../service/number-api.service';

@Component({
  selector: 'app-results-grid',
  templateUrl: './results-grid.component.html',
  styleUrls: ['./results-grid.component.scss']
})
export class ResultsGridComponent implements OnInit {

  results = [];
  message = "";
  
  constructor(private service: NumberApiService) { }
  ngOnInit(): void {
    this.service.getNumbers().subscribe((x: any) => this.results = x);
    this.service.getMessage().subscribe((x: any) => this.message = x);
  }

}
