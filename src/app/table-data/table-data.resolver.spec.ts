import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { tableDataResolver } from './table-data.resolver';

describe('tableDataResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => tableDataResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
