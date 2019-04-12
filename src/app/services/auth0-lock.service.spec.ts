import { TestBed } from '@angular/core/testing';

import { Auth0LockService } from './auth0-lock.service';

describe('Auth0LockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Auth0LockService = TestBed.get(Auth0LockService);
    expect(service).toBeTruthy();
  });
});
