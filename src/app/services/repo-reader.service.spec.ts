import { TestBed } from '@angular/core/testing';

import { RepoReaderService } from './repo-reader.service';

describe('RepoReaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepoReaderService = TestBed.get(RepoReaderService);
    expect(service).toBeTruthy();
  });
});
