import { TestBed } from '@angular/core/testing';

import { ContasDataServiceService } from './contas-data-service.service';

describe('ContasDataServiceService', () => {
  let service: ContasDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContasDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
