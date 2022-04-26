import { TestBed } from '@angular/core/testing';

import { DataResolverResolver } from './data-resolver.resolver';

describe('DataResolverResolver', () => {
  let resolver: DataResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DataResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
