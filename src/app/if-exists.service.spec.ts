import { TestBed } from '@angular/core/testing';

import { IfExistsService } from './if-exists.service';

describe('IfExistsService', () => {
  let service: IfExistsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IfExistsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
