import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievedcompetencesComponent } from './achievedcompetences.component';

describe('AchievedcompetencesComponent', () => {
  let component: AchievedcompetencesComponent;
  let fixture: ComponentFixture<AchievedcompetencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchievedcompetencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievedcompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
