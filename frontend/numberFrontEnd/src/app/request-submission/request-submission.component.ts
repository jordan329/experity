import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-request-submission',
  templateUrl: './request-submission.component.html',
  styleUrls: ['./request-submission.component.scss']
})
export class RequestSubmissionComponent implements OnInit {
  sampleMax = 0;
  patientScore = 0;
  doctorScore = 0;
  message = "";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onKey(event: any) { // without type info
    switch (event.srcElement.id) {
      case 'sampleMax':
        this.sampleMax = event.target.value
        break;
      case 'patientScore':
        this.patientScore = event.target.value
        break;
      case 'doctorScore':
        this.doctorScore = event.target.value
        break;
      case 'message':
        this.message = event.target.value
        break;
    }
  }
  sendRequest() {
    this.http.get("http://localhost:7180/", { withCredentials: true }).subscribe();
  }
}
