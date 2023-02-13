import { TestBed } from '@angular/core/testing';

import { EstoquePorDataFortyflexService } from './estoque-por-data-fortyflex.service';

describe('EstoquePorDataFortyflexService', () => {
  let service: EstoquePorDataFortyflexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstoquePorDataFortyflexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
