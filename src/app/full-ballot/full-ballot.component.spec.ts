import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullBallotComponent } from './full-ballot.component';

describe('FullBallotComponent', () => {
  let component: FullBallotComponent;
  let fixture: ComponentFixture<FullBallotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullBallotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullBallotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
