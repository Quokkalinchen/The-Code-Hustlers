import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalplanComponent } from './educationalplan.component';

describe('EducationalplanComponent', () => {
  let component: EducationalplanComponent;
  let fixture: ComponentFixture<EducationalplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationalplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationalplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
