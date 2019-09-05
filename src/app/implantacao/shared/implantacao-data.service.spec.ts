import { TestBed } from '@angular/core/testing';

import { ImplantacaoDataService } from './implantacao-data.service';

describe('ImplantacaoDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImplantacaoDataService = TestBed.get(ImplantacaoDataService);
    expect(service).toBeTruthy();
  });
});
