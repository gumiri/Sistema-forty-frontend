import { TestBed } from '@angular/core/testing';

import { TodosClientesService } from './todos-clientes.service';

describe('TodosClientesService', () => {
  let service: TodosClientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodosClientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
