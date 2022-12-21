import { TestBed } from '@angular/core/testing';

import { ContasReceberService } from './contas-receber.service';

describe('ContasReceberService', () => {
  let service: ContasReceberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContasReceberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
