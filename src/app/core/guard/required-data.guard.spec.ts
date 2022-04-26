import { TestBed } from '@angular/core/testing';

import { RequiredDataGuard } from './required-data.guard';

describe('RequiredDataGuard', () => {
  let guard: RequiredDataGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RequiredDataGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
