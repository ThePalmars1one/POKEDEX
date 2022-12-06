import { TestBed } from '@angular/core/testing';

import { SearchscriptService } from './searchscript.service';

describe('SearchscriptService', () => {
  let service: SearchscriptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchscriptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
