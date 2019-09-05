import { TestBed } from '@angular/core/testing';

import { EquipeDataService } from './equipe-data.service';

describe('EquipeDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EquipeDataService = TestBed.get(EquipeDataService);
    expect(service).toBeTruthy();
  });
});
