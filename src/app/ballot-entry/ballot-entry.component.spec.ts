import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BallotEntryComponent } from './ballot-entry.component';

describe('BallotEntryComponent', () => {
  let component: BallotEntryComponent;
  let fixture: ComponentFixture<BallotEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BallotEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BallotEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
