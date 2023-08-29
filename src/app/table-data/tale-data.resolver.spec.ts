import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { taleDataResolver } from './tale-data.resolver';

describe('taleDataResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => taleDataResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
