import { TestBed } from '@angular/core/testing';

import { ShpeGPTService } from './shpe-gpt.service';

describe('ShpeGPTService', () => {
  let service: ShpeGPTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShpeGPTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
