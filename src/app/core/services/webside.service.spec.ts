import { TestBed } from '@angular/core/testing';

import { WebsideService } from './webside.service';

describe('WebsideService', () => {
  let service: WebsideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebsideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
