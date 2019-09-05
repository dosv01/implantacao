import { TestBed } from '@angular/core/testing';

import { ImplantacaoService } from './implantacao.service';

describe('ImplantacaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImplantacaoService = TestBed.get(ImplantacaoService);
    expect(service).toBeTruthy();
  });
});
