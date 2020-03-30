import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecinctSelectorComponent } from './precinct-selector.component';

describe('PrecinctSelectorComponent', () => {
  let component: PrecinctSelectorComponent;
  let fixture: ComponentFixture<PrecinctSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecinctSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecinctSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
