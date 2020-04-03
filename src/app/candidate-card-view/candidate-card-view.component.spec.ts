import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateCardViewComponent } from './candidate-card-view.component';

describe('CandidateCardViewComponent', () => {
  let component: CandidateCardViewComponent;
  let fixture: ComponentFixture<CandidateCardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateCardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
