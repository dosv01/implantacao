import { TestBed } from '@angular/core/testing';

import { TarefaDataService } from './tarefa-data.service';

describe('EquipeDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TarefaDataService = TestBed.get(TarefaDataService);
    expect(service).toBeTruthy();
  });
});
