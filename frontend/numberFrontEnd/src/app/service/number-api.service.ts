import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberApiService {

  constructor(private http: HttpClient) { }

  getNumbers() { 
    return this.http.get("https://localhost:7180/").pipe(take(1))
  }
  getMessage() { 
    return this.http.get("https://localhost:7180/message").pipe(take(1))
  }
  postNumbers(sampleMax: number, patientScore: number, doctorScore: number, message: string) {
    return this.http.post("https://localhost:7180/",
      {
        TimeOfRequest: new Date(),
        SampleMaxCount: sampleMax,
        PatientScore: patientScore,
        DoctorScore: doctorScore,
        UploadedMessage: message
      }
    ).pipe(take(1)).subscribe();
  }
}
