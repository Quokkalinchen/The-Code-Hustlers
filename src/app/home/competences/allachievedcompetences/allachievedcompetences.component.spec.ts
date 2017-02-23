import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllachievedcompetencesComponent } from './allachievedcompetences.component';

describe('AllachievedcompetencesComponent', () => {
  let component: AllachievedcompetencesComponent;
  let fixture: ComponentFixture<AllachievedcompetencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllachievedcompetencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllachievedcompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
