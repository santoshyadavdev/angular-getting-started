import { TestBed } from '@angular/core/testing';

import { NewProductService } from './new-product.service';

describe('NewProductService', () => {
  let service: NewProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
