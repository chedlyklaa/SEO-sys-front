import { TestBed } from '@angular/core/testing';

import { BacklinksService } from './backlinks.service';

describe('BacklinksService', () => {
  let service: BacklinksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BacklinksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
