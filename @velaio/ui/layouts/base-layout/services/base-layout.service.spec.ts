import { TestBed } from '@angular/core/testing';

import { BaseLayoutService } from './base-layout.service';

describe('BaseLayoutService', () => {
  let service: BaseLayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
