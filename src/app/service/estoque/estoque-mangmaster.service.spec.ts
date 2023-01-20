import { TestBed } from '@angular/core/testing';

import { EstoqueMangmasterService } from './estoque-mangmaster.service';

describe('EstoqueMangmasterService', () => {
  let service: EstoqueMangmasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstoqueMangmasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
