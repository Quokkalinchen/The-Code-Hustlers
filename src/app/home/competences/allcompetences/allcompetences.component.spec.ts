import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcompetencesComponent } from './allcompetences.component';

describe('AllcompetencesComponent', () => {
  let component: AllcompetencesComponent;
  let fixture: ComponentFixture<AllcompetencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllcompetencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
