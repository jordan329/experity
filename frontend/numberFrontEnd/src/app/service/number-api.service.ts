import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mergeMap, Observable, of, retry, retryWhen, take, tap, throwError } from 'rxjs';
import { Result } from '../models/result';

@Injectable({
  providedIn: 'root'
})
export class NumberApiService {

  private results: Observable<Result[]> = new Observable();

  constructor(private http: HttpClient) { }

  getNumbers(): Observable<Result[]> {
    return this.http.get<Result[]>("https://localhost:7180/").pipe(mergeMap(val => val.length == 0 ? throwError(() => 'Error!') : of(val)),
      tap(x => console.log(x)),
      retry(2))
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

  getScoreFromNumber(input: number): string {
    let value: string = '';
    switch (input) {
      case 0:
        value = 'none'
        break;
      case 1:
        value = 'Doctor'
        break;
      case 2:
        value = 'Patient'
        break;
      case 3:
        value = 'Both'
        break;
    }
    return value;
  }
}
