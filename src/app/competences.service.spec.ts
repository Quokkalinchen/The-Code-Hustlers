import { TestBed, inject } from '@angular/core/testing';
import { CompetencesService } from './competences.service';

describe('CompetencesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompetencesService]
    });
  });

  it('should ...', inject([CompetencesService], (service: CompetencesService) => {
    expect(service).toBeTruthy();
  }));
});
