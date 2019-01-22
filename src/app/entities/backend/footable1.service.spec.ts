import { TestBed } from '@angular/core/testing';

import { Footable1Service } from './footable1/footable1.service';

describe('Footable1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Footable1Service = TestBed.get(Footable1Service);
    expect(service).toBeTruthy();
  });
});
