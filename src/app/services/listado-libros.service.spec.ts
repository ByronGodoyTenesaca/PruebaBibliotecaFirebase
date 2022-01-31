import { TestBed } from '@angular/core/testing';

import { ListadoLibrosService } from './listado-libros.service';

describe('ListadoLibrosService', () => {
  let service: ListadoLibrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListadoLibrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
