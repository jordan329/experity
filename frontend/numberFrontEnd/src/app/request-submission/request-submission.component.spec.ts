import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestSubmissionComponent } from './request-submission.component';

describe('RequestSubmissionComponent', () => {
  let component: RequestSubmissionComponent;
  let fixture: ComponentFixture<RequestSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestSubmissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
